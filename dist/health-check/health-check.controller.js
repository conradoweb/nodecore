"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheckController = void 0;
const controller_decorator_1 = require("@nestjs/common/decorators/core/controller.decorator");
const request_mapping_decorator_1 = require("@nestjs/common/decorators/http/request-mapping.decorator");
const health_check_service_1 = require("@nestjs/terminus/dist/health-check/health-check.service");
let HealthCheckController = class HealthCheckController {
    constructor(health) {
        this.health = health;
    }
    checkLiveness() {
        return this.health.check([]);
    }
    checkReadiness() {
        return this.health.check([]);
    }
    checkStartup() {
        return this.health.check([]);
    }
};
__decorate([
    (0, request_mapping_decorator_1.Get)("liveness"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthCheckController.prototype, "checkLiveness", null);
__decorate([
    (0, request_mapping_decorator_1.Get)("readiness"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthCheckController.prototype, "checkReadiness", null);
__decorate([
    (0, request_mapping_decorator_1.Get)("startup"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthCheckController.prototype, "checkStartup", null);
HealthCheckController = __decorate([
    (0, controller_decorator_1.Controller)("health-check"),
    __metadata("design:paramtypes", [health_check_service_1.HealthCheckService])
], HealthCheckController);
exports.HealthCheckController = HealthCheckController;
//# sourceMappingURL=health-check.controller.js.map