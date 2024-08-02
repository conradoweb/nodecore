/// <reference types="node" />
import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { AsyncLocalStorage } from "async_hooks";
export declare class TracerInterceptor implements NestInterceptor {
    private readonly als;
    constructor(als: AsyncLocalStorage<any>);
    intercept(context: ExecutionContext, next: CallHandler): import("rxjs").Observable<any>;
}
