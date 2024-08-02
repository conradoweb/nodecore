"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HttpResultService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResultService = void 0;
const common_1 = require("@nestjs/common");
const app_bad_gateway_result_1 = require("../models/app-bad-gateway-result");
const app_bad_request_result_model_1 = require("../models/app-bad-request-result.model");
const app_internal_server_error_result_model_1 = require("../models/app-internal-server-error-result.model");
const app_not_found_result_model_1 = require("../models/app-not-found-result.model");
const app_error_result_model_1 = require("../models/app-error-result.model");
const app_created_result_model_1 = require("../models/app-created-result.model");
const app_accepted_result_model_1 = require("../models/app-accepted-result.model");
const app_no_content_result_model_1 = require("../models/app-no-content-result.model");
const app_unauthorized_result_model_1 = require("../models/app-unauthorized-result.model");
const app_forbidden_result_model_1 = require("../models/app-forbidden-result.model");
const app_ok_result_model_1 = require("../models/app-ok-result.model");
const app_exception_1 = require("../exceptions/app.exception");
const result_dto_1 = require("@core/dto/result.dto");
const app_gone_result_model_1 = require("../models/app-gone-result.model");
let HttpResultService = HttpResultService_1 = class HttpResultService {
    constructor() {
        this.logger = new common_1.Logger(HttpResultService_1.name);
    }
    createResult(status, data = result_dto_1.ResultDto.emptyResult(), errors = [new app_error_result_model_1.AppErrorResult("")], paginationOptions, parameters) {
        this.logger.log(`Try to create result ${status}`);
        switch (status) {
            case 200:
                this.logger.log(`Created result 200`);
                return new app_ok_result_model_1.AppOkResult(data.data, data.meta);
            case 201:
                this.logger.log(`Created result 201`);
                return new app_created_result_model_1.AppCreatedResult(data.data);
            case 202:
                this.logger.log(`Created result 202`);
                return new app_accepted_result_model_1.AppAcceptedResult(errors.map((e) => e.message).join(","));
            case 204:
                this.logger.log(`Created result 204`);
                return new app_no_content_result_model_1.AppNoContentResult();
            case 400:
                this.logger.log(`Created result 400`);
                return new app_exception_1.AppException(new app_bad_request_result_model_1.AppBadRequestResult(errors));
            case 401:
                this.logger.log(`Created result 401`);
                this.logger.log(errors.map((e) => e.message).join(","));
                return new app_exception_1.AppException(new app_unauthorized_result_model_1.AppUnauthorizedResult());
            case 403:
                this.logger.log(`Created result 403`);
                this.logger.log(errors.map((e) => e.message).join(","));
                return new app_exception_1.AppException(new app_forbidden_result_model_1.AppForbiddenResult());
            case 404:
                this.logger.log(`Created result 404`);
                return new app_exception_1.AppException(new app_not_found_result_model_1.AppNotFoundResult(errors.map((e) => e.message).join(",")));
            case 410:
                this.logger.log(`Created result 410`);
                return new app_exception_1.AppException(new app_gone_result_model_1.AppGoneResult(errors.map((e) => e.message).join(",")));
            case 500:
                this.logger.log(`Created result 500`);
                return new app_exception_1.AppException(new app_internal_server_error_result_model_1.AppInternalServerErrorResult(errors));
            case 502:
                this.logger.log(`Created result 502`);
                return new app_exception_1.AppException(new app_bad_gateway_result_1.AppBadGatewayResult(errors[0], parameters));
            default:
                this.logger.log(`Created result by default status`);
                return new app_exception_1.AppException(new app_not_found_result_model_1.AppNotFoundResult(errors.map((e) => e.message).join(",")));
        }
    }
};
HttpResultService = HttpResultService_1 = __decorate([
    (0, common_1.Injectable)()
], HttpResultService);
exports.HttpResultService = HttpResultService;
//# sourceMappingURL=http-result.service.js.map