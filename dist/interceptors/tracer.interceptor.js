"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TracerInterceptor = void 0;
const rxjs_1 = require("rxjs");
const api_1 = require("@opentelemetry/api");
const util_1 = require("@core/utils/util");
class TracerInterceptor {
    constructor(als) {
        this.als = als;
    }
    intercept(context, next) {
        const tracer = api_1.trace.getTracer((0, util_1.getEnvironment)("APP_NAME"), (0, util_1.getEnvironment)("APP_VERSION"));
        const req = context.switchToHttp().getRequest();
        const requestId = req.headers["x-request-id"];
        const action = context.getHandler().name;
        const controller = context.getClass().name;
        if (req.url.includes("/health-check") || req.url.includes("/metrics")) {
            return next.handle();
        }
        const span = tracer.startSpan(`${controller}:${action}`);
        span.setAttribute("transactionId", requestId);
        span.setAttribute("env", (0, util_1.getEnvironment)("NODE_ENV"));
        span.addEvent(action);
        const store = this.als?.getStore();
        if (store) {
            store["span"] = span;
            store["traceId"] = span.spanContext().traceId;
            req.headers["x-trace-id"] = span.spanContext().traceId;
        }
        return next.handle().pipe((0, rxjs_1.tap)(() => {
            store["span"].setStatus({ code: api_1.SpanStatusCode.OK });
            store["span"].end();
        }));
    }
}
exports.TracerInterceptor = TracerInterceptor;
//# sourceMappingURL=tracer.interceptor.js.map