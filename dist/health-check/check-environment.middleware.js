"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckEnvironmentMiddleware = exports.requiredEnvs = void 0;
const common_1 = require("@nestjs/common");
const util_1 = require("../utils/util");
const terminus_1 = require("@nestjs/terminus");
exports.requiredEnvs = [
    'NODE_ENV',
    'PORT',
    'BASE_CAS_URL',
    'AUTH_GUARD',
    'CAS_USER',
    'CAS_PASSWORD',
    'BUNNY_AMQP_USER',
    'BUNNY_AMQP_PASSWORD',
    'BUNNY_AMQP_ADDRESSES',
    'BUNNY_AMQP_PORT',
    'MS_OWN_AMQP_EXCHANGE',
    'MS_OWN_AMQP_ROUTE_KEY',
];
let CheckEnvironmentMiddleware = class CheckEnvironmentMiddleware {
    async use(req, res, next) {
        const checkEnvironment = await (0, util_1.hasMinimumEnvironment)(exports.requiredEnvs);
        if (!checkEnvironment.ok) {
            throw new terminus_1.HealthCheckError(checkEnvironment.message, {});
        }
        next();
    }
};
CheckEnvironmentMiddleware = __decorate([
    (0, common_1.Injectable)()
], CheckEnvironmentMiddleware);
exports.CheckEnvironmentMiddleware = CheckEnvironmentMiddleware;
//# sourceMappingURL=check-environment.middleware.js.map