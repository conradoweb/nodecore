import { MiddlewareConsumer, NestModule } from "@nestjs/common";
export declare class HealthCheckModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void;
}
