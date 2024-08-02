import {
  CallHandler,
  ExecutionContext,
  Logger,
  NestInterceptor,
} from "@nestjs/common";

import { tap } from "rxjs";

export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler) {
    const now = Date.now();
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    const url = req.url;
    return next.handle().pipe(
      tap(() => {
        const res = context.switchToHttp().getResponse();
        const delay = Date.now() - now;
        this.logger.log(
          `${req.ip} ${new Date()} ${method} ${url} ${req.protocol} ${
            res.statusCode
          } ${req.headers["content-length"] || "0"} ${req.hostname} ${delay}ms`
        );
      })
    );
  }
}
