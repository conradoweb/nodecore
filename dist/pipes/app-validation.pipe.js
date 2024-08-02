"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppValidationPipe = void 0;
const validation_pipe_1 = require("@nestjs/common/pipes/validation.pipe");
const app_bad_request_result_model_1 = require("../models/app-bad-request-result.model");
const app_error_result_model_1 = require("../models/app-error-result.model");
const app_exception_1 = require("../exceptions/app.exception");
class AppValidationPipe extends validation_pipe_1.ValidationPipe {
    constructor() {
        super({
            stopAtFirstError: false,
            whitelist: true,
            forbidNonWhitelisted: true,
            dismissDefaultMessages: false,
            exceptionFactory: (errors) => {
                const resultErrors = new Array();
                this.exceptionFactoryChildrens(errors, resultErrors);
                const result = new app_bad_request_result_model_1.AppBadRequestResult(resultErrors);
                return new app_exception_1.AppException(result);
            },
        });
    }
    exceptionFactoryChildrens(errors, resultErrors) {
        if (errors != null && errors.length > 0) {
            errors.forEach((error) => {
                if (error.children != null && error.children.length > 0) {
                    this.exceptionFactoryChildrens(error.children, resultErrors);
                }
                if (error.constraints != null) {
                    Object.values(error.constraints).forEach((constraintValue) => {
                        resultErrors.push(new app_error_result_model_1.AppErrorResult(constraintValue));
                    });
                }
            });
        }
    }
}
exports.AppValidationPipe = AppValidationPipe;
//# sourceMappingURL=app-validation.pipe.js.map