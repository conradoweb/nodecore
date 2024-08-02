"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
class LoggingInterceptor {
    constructor() {
        this.logger = new common_1.Logger(LoggingInterceptor.name);
    }
    intercept(context, next) {
        const now = Date.now();
        const req = context.switchToHttp().getRequest();
        const method = req.method;
        const url = req.url;
        return next.handle().pipe((0, rxjs_1.tap)(() => {
            const res = context.switchToHttp().getResponse();
            const delay = Date.now() - now;
            this.logger.log(`${req.ip} ${new Date()} ${method} ${url} ${req.protocol} ${res.statusCode} ${req.headers["content-length"] || "0"} ${req.hostname} ${delay}ms`);
        }));
    }
}
exports.LoggingInterceptor = LoggingInterceptor;
//# sourceMappingURL=logger.interceptor.js.map