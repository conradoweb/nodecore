"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLoggerModule = void 0;
const common_1 = require("@nestjs/common");
const logger_interceptor_1 = require("./logger.interceptor");
const filtered_logger_class_1 = require("./filtered-logger.class");
let CustomLoggerModule = class CustomLoggerModule {
};
CustomLoggerModule = __decorate([
    (0, common_1.Module)({
        providers: [filtered_logger_class_1.FilteredLogger, logger_interceptor_1.LoggingInterceptor],
        exports: [filtered_logger_class_1.FilteredLogger],
    })
], CustomLoggerModule);
exports.CustomLoggerModule = CustomLoggerModule;
//# sourceMappingURL=logger.module.js.map