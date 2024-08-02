"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppResultInterceptor = void 0;
const injectable_decorator_1 = require("@nestjs/common/decorators/core/injectable.decorator");
const catchError_1 = require("rxjs/internal/operators/catchError");
const map_1 = require("rxjs/internal/operators/map");
const app_exception_1 = require("../exceptions/app.exception");
const app_error_result_model_1 = require("../models/app-error-result.model");
const http_result_service_1 = require("../services/http-result.service");
const result_dto_1 = require("../dto/result.dto");
const async_hooks_1 = require("async_hooks");
const filtered_logger_class_1 = require("@core/loggers/filtered-logger.class");
const api_1 = require("@opentelemetry/api");
let AppResultInterceptor = class AppResultInterceptor {
    constructor(httpResultService, als, logger) {
        this.httpResultService = httpResultService;
        this.als = als;
        this.logger = logger;
    }
    intercept(context, next) {
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
            if (request.url.includes("/health-check") ||
                request.url.includes("/metrics")) {
                return next.handle();
            }
        }
        return next.handle().pipe((0, catchError_1.catchError)((err) => {
            if (err instanceof app_exception_1.AppException) {
                this.logger.error(`response=${JSON.stringify(err["response"])}`);
                this.logger.log(`Request completed in ${Date.now() - now}ms.`);
                throw err;
            }
            this.logger.error(`Internal server error. ${err.message}`);
            this.logger.error(`${JSON.stringify(err.stack)}`);
            this.logger.log(`Request completed in ${Date.now() - now}ms.`);
            this.logger.log(err);
            const error = this.httpResultService.createResult(500, result_dto_1.ResultDto.emptyResult(), [new app_error_result_model_1.AppErrorResult(err.message)]);
            if (store) {
                span.recordException(err);
                span.setStatus({ code: api_1.SpanStatusCode.ERROR });
                span.end();
            }
            throw error;
        }), (0, map_1.map)((data) => {
            const ctx = context.switchToHttp();
            const res = ctx.getResponse();
            if (res != null) {
                try {
                    res.status(data.getCode());
                }
                catch (error) {
                    if (store) {
                        span.recordException(error);
                        span.setStatus({ code: api_1.SpanStatusCode.ERROR });
                        span.end();
                    }
                    this.logger.error(`Response does not implement IAppResult.`);
                    throw this.httpResultService.createResult(500, result_dto_1.ResultDto.emptyResult(), [new app_error_result_model_1.AppErrorResult(`Response does not implement IAppResult.`)]);
                }
            }
            this.logger.log(`Request completed in ${Date.now() - now} ms.`);
            this.logger.log("Response is: ");
            this.logger.log(data);
            return data;
        }));
    }
};
AppResultInterceptor = __decorate([
    (0, injectable_decorator_1.Injectable)(),
    __metadata("design:paramtypes", [http_result_service_1.HttpResultService,
        async_hooks_1.AsyncLocalStorage,
        filtered_logger_class_1.FilteredLogger])
], AppResultInterceptor);
exports.AppResultInterceptor = AppResultInterceptor;
//# sourceMappingURL=app-result.interceptor.js.map