import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { tap } from "rxjs";
import { SpanStatusCode, trace } from "@opentelemetry/api";
import { getEnvironment } from "@core/utils/util";
import { AsyncLocalStorage } from "async_hooks";
export class TracerInterceptor implements NestInterceptor {
  constructor(private readonly als: AsyncLocalStorage<any>) {}
  intercept(context: ExecutionContext, next: CallHandler) {
    const tracer = trace.getTracer(
      getEnvironment("APP_NAME"),
      getEnvironment("APP_VERSION")
    );
    const req = context.switchToHttp().getRequest();
    const requestId = req.headers["x-request-id"];
    const action = context.getHandler().name;
    const controller = context.getClass().name;

    if (req.url.includes("/health-check") || req.url.includes("/metrics")) {
      return next.handle();
    }
    const span = tracer.startSpan(`${controller}:${action}`);
    span.setAttribute("transactionId", requestId);
    span.setAttribute("env", getEnvironment("NODE_ENV"));
    span.addEvent(action);
    const store = this.als?.getStore();
    if (store) {
      store["span"] = span;
      store["traceId"] = span.spanContext().traceId;
      req.headers["x-trace-id"] = span.spanContext().traceId;
    }

    return next.handle().pipe(
      tap(() => {
        store["span"].setStatus({ code: SpanStatusCode.OK });
        store["span"].end();
      })
    );
  }
}
