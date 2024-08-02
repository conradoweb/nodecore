/// <reference types="node" />
import { CallHandler, NestInterceptor } from "@nestjs/common/interfaces/features/nest-interceptor.interface";
import { IAppResult } from "../interfaces/app-result.interface";
import { Observable } from "rxjs/internal/Observable";
import { HttpResultService } from "../services/http-result.service";
import { AsyncLocalStorage } from "async_hooks";
import { FilteredLogger } from "@core/loggers/filtered-logger.class";
export declare class AppResultInterceptor<T> implements NestInterceptor<T, IAppResult<T>> {
    private httpResultService;
    private readonly als;
    private readonly logger;
    constructor(httpResultService: HttpResultService, als: AsyncLocalStorage<any>, logger: FilteredLogger);
    intercept(context: any, next: CallHandler): Observable<IAppResult<T>>;
}
