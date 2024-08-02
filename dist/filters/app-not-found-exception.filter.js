"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppNotFoundExceptionFilter = void 0;
const catch_decorator_1 = require("@nestjs/common/decorators/core/catch.decorator");
const not_found_exception_1 = require("@nestjs/common/exceptions/not-found.exception");
const app_not_found_result_model_1 = require("../models/app-not-found-result.model");
let AppNotFoundExceptionFilter = class AppNotFoundExceptionFilter {
    catch(exception, host) {
        if (host.getType() !== "http") {
            throw exception;
        }
        const response = host.switchToHttp().getResponse();
        response.status(404).json(new app_not_found_result_model_1.AppNotFoundResult(exception.message));
    }
};
AppNotFoundExceptionFilter = __decorate([
    (0, catch_decorator_1.Catch)(not_found_exception_1.NotFoundException)
], AppNotFoundExceptionFilter);
exports.AppNotFoundExceptionFilter = AppNotFoundExceptionFilter;
//# sourceMappingURL=app-not-found-exception.filter.js.map