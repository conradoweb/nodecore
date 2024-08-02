"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheckModule = void 0;
const module_decorator_1 = require("@nestjs/common/decorators/modules/module.decorator");
const terminus_module_1 = require("@nestjs/terminus/dist/terminus.module");
const health_check_controller_1 = require("./health-check.controller");
const check_environment_middleware_1 = require("./check-environment.middleware");
let HealthCheckModule = class HealthCheckModule {
    configure(consumer) {
        consumer.apply(check_environment_middleware_1.CheckEnvironmentMiddleware).forRoutes(health_check_controller_1.HealthCheckController);
    }
};
HealthCheckModule = __decorate([
    (0, module_decorator_1.Module)({
        imports: [terminus_module_1.TerminusModule],
        controllers: [health_check_controller_1.HealthCheckController],
    })
], HealthCheckModule);
exports.HealthCheckModule = HealthCheckModule;
//# sourceMappingURL=health-check.module.js.map