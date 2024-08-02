import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { Get } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { HealthCheckService } from "@nestjs/terminus/dist/health-check/health-check.service";

@Controller("health-check")
export class HealthCheckController {
  constructor(private readonly health: HealthCheckService) {}

  @Get("liveness")
  checkLiveness() {
    return this.health.check([]);
  }

  @Get("readiness")
  checkReadiness() {
    return this.health.check([]);
  }

  @Get("startup")
  checkStartup() {
    return this.health.check([]);
  }
}
