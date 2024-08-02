"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppParseUUIDPipe = void 0;
const app_bad_request_result_model_1 = require("../models/app-bad-request-result.model");
const app_error_result_model_1 = require("../models/app-error-result.model");
const app_exception_1 = require("../exceptions/app.exception");
const parse_uuid_pipe_1 = require("@nestjs/common/pipes/parse-uuid.pipe");
class AppParseUUIDPipe extends parse_uuid_pipe_1.ParseUUIDPipe {
    constructor(version) {
        super({
            version,
            errorHttpStatusCode: 400,
            exceptionFactory: (error) => {
                return new app_exception_1.AppException(new app_bad_request_result_model_1.AppBadRequestResult([new app_error_result_model_1.AppErrorResult(error)]));
            },
        });
    }
}
exports.AppParseUUIDPipe = AppParseUUIDPipe;
//# sourceMappingURL=app-parse-uuid.pipe.js.map