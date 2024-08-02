import { Module } from "@nestjs/common";
import { RabbitMQService } from "./rabbit-mq.service";
import { config } from "dotenv";
import { RabbitMQModule as RabbitMQModuleLib } from "@golevelup/nestjs-rabbitmq";
import { getEnvironment } from "../utils/util";

config();

@Module({
  imports: [
    RabbitMQModuleLib.forRoot(RabbitMQModuleLib, {
      exchanges: [
        {
          name: getEnvironment("MS_OWN_AMQP_EXCHANGE") ?? "",
        },
      ],
      uri: `amqp://${getEnvironment("BUNNY_AMQP_USER")}:${getEnvironment(
        "BUNNY_AMQP_PASSWORD"
      )}@${getEnvironment("BUNNY_AMQP_ADDRESSES")}:${getEnvironment(
        "BUNNY_AMQP_PORT"
      )}`,
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
  providers: [RabbitMQService],
  exports: [RabbitMQService],
})
export class RabbitMQModule {}
