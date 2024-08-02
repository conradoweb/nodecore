"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMQModule = void 0;
const common_1 = require("@nestjs/common");
const rabbit_mq_service_1 = require("./rabbit-mq.service");
const dotenv_1 = require("dotenv");
const nestjs_rabbitmq_1 = require("@golevelup/nestjs-rabbitmq");
const util_1 = require("../utils/util");
(0, dotenv_1.config)();
let RabbitMQModule = class RabbitMQModule {
};
RabbitMQModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_rabbitmq_1.RabbitMQModule.forRoot(nestjs_rabbitmq_1.RabbitMQModule, {
                exchanges: [
                    {
                        name: (0, util_1.getEnvironment)("MS_OWN_AMQP_EXCHANGE") ?? "",
                    },
                ],
                uri: `amqp://${(0, util_1.getEnvironment)("BUNNY_AMQP_USER")}:${(0, util_1.getEnvironment)("BUNNY_AMQP_PASSWORD")}@${(0, util_1.getEnvironment)("BUNNY_AMQP_ADDRESSES")}:${(0, util_1.getEnvironment)("BUNNY_AMQP_PORT")}`,
                connectionInitOptions: { wait: false },
                channels: {
                    "channel-1": {
                        prefetchCount: 15,
                        default: true,
                    },
                    "channel-2": {
                        prefetchCount: 2,
                    },
                },
            }),
        ],
        controllers: [],
        providers: [rabbit_mq_service_1.RabbitMQService],
        exports: [rabbit_mq_service_1.RabbitMQService],
    })
], RabbitMQModule);
exports.RabbitMQModule = RabbitMQModule;
//# sourceMappingURL=rabbit-mq.module.js.map