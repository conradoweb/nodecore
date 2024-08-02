import { AmqpConnection } from "@golevelup/nestjs-rabbitmq";
export declare class RabbitMQService {
    private readonly amqpConnection;
    constructor(amqpConnection: AmqpConnection);
    send(exchange: string, routingKey: string, data: any): Promise<boolean>;
}
