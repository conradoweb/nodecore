import { Injectable } from "@nestjs/common";
import { AmqpConnection } from "@golevelup/nestjs-rabbitmq";

@Injectable()
export class RabbitMQService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  public send(exchange: string, routingKey: string, data: any) {
    return this.amqpConnection.publish(exchange, routingKey, data, {
      durable: false,
    });
  }
}
