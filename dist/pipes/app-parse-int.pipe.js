"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppParseIntPipe = void 0;
const parse_int_pipe_1 = require("@nestjs/common/pipes/parse-int.pipe");
const app_bad_request_result_model_1 = require("../models/app-bad-request-result.model");
const app_error_result_model_1 = require("../models/app-error-result.model");
const app_exception_1 = require("../exceptions/app.exception");
class AppParseIntPipe extends parse_int_pipe_1.ParseIntPipe {
    constructor() {
        super({
            errorHttpStatusCode: 400,
            exceptionFactory: (error) => {
                return new app_exception_1.AppException(new app_bad_request_result_model_1.AppBadRequestResult([new app_error_result_model_1.AppErrorResult(error)]));
            },
        });
    }
}
exports.AppParseIntPipe = AppParseIntPipe;
//# sourceMappingURL=app-parse-int.pipe.js.map