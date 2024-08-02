import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { TerminusModule } from "@nestjs/terminus/dist/terminus.module";
import { HealthCheckController } from "./health-check.controller";
import { MiddlewareConsumer, NestModule } from "@nestjs/common";
import { CheckEnvironmentMiddleware } from "./check-environment.middleware";

@Module({
  imports: [TerminusModule],
  controllers: [HealthCheckController],
})
export class HealthCheckModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CheckEnvironmentMiddleware).forRoutes(HealthCheckController);
  }
}
