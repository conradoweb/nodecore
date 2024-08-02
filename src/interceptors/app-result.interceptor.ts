import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import {
  CallHandler,
  NestInterceptor,
} from "@nestjs/common/interfaces/features/nest-interceptor.interface";
import { IAppResult } from "../interfaces/app-result.interface";
import { Observable } from "rxjs/internal/Observable";
import { catchError } from "rxjs/internal/operators/catchError";
import { map } from "rxjs/internal/operators/map";
import { AppException } from "../exceptions/app.exception";
import { AppErrorResult } from "../models/app-error-result.model";
import { HttpResultService } from "../services/http-result.service";
import { ResultDto } from "../dto/result.dto";
import { AsyncLocalStorage } from "async_hooks";
import { FilteredLogger } from "@core/loggers/filtered-logger.class";
import { SpanStatusCode } from "@opentelemetry/api";

@Injectable()
export class AppResultInterceptor<T>
  implements NestInterceptor<T, IAppResult<T>>
{
  constructor(
    private httpResultService: HttpResultService,
    private readonly als: AsyncLocalStorage<any>,
    private readonly logger: FilteredLogger
  ) {}
  intercept(context: any, next: CallHandler): Observable<IAppResult<T>> {
    const now = Date.now();
    const request = context.switchToHttp().getRequest();
    const store = this.als?.getStore();
    const span = store?.["span"];
    if (context.getType() === "http") {
      this.logger.setLocalStorage(this.als);
      this.logger.log(`[${request.method}] ${request.url}`);
      if (request.method === "POST" || request.method === "PUT") {
        this.logger.log(`request=${JSON.stringify(request.body)}`);
      }

      // Ignore route health-check && metrics
      if (
        request.url.includes("/health-check") ||
        request.url.includes("/metrics")
      ) {
        return next.handle();
      }
    }
    return next.handle().pipe(
      catchError((err) => {
        if (err instanceof AppException) {
          this.logger.error(`response=${JSON.stringify(err["response"])}`);
          this.logger.log(`Request completed in ${Date.now() - now}ms.`);
          throw err;
        }
        this.logger.error(`Internal server error. ${err.message}`);
        this.logger.error(`${JSON.stringify(err.stack)}`);
        this.logger.log(`Request completed in ${Date.now() - now}ms.`);
        this.logger.log(err);
        const error = this.httpResultService.createResult(
          500,
          ResultDto.emptyResult(),
          [new AppErrorResult(err.message)]
        );
        if (store) {
          span.recordException(err);
          span.setStatus({ code: SpanStatusCode.ERROR });
          span.end();
        }
        throw error;
      }),
      map((data: IAppResult<T>) => {
        const ctx = context.switchToHttp();
        const res = ctx.getResponse();
        if (res != null) {
          try {
            res.status(data.getCode());
          } catch (error) {
            if (store) {
              span.recordException(error);
              span.setStatus({ code: SpanStatusCode.ERROR });
              span.end();
            }
            this.logger.error(`Response does not implement IAppResult.`);
            throw this.httpResultService.createResult(
              500,
              ResultDto.emptyResult(),
              [new AppErrorResult(`Response does not implement IAppResult.`)]
            );
          }
        }
        this.logger.log(`Request completed in ${Date.now() - now} ms.`);
        this.logger.log("Response is: ");
        this.logger.log(data);
        return data;
      })
    );
  }
}
