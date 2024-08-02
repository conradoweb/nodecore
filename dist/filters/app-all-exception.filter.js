"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AppAllExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppAllExceptionFilter = void 0;
const catch_decorator_1 = require("@nestjs/common/decorators/core/catch.decorator");
const app_internal_server_error_result_model_1 = require("../models/app-internal-server-error-result.model");
const common_1 = require("@nestjs/common");
let AppAllExceptionFilter = AppAllExceptionFilter_1 = class AppAllExceptionFilter {
    constructor() {
        this.logger = new common_1.Logger(AppAllExceptionFilter_1.name);
    }
    catch(exception, host) {
        if (host.getType() !== "http") {
            throw exception;
        }
        this.logger.error(`Not handled exception: ${exception.message}`);
        this.logger.error(`Stacktrace: ${exception.stack}`);
        const response = host.switchToHttp().getResponse();
        response.status(500).json(new app_internal_server_error_result_model_1.AppInternalServerErrorResult());
    }
};
AppAllExceptionFilter = AppAllExceptionFilter_1 = __decorate([
    (0, catch_decorator_1.Catch)()
], AppAllExceptionFilter);
exports.AppAllExceptionFilter = AppAllExceptionFilter;
//# sourceMappingURL=app-all-exception.filter.js.map