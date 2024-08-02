import { HealthCheckService } from "@nestjs/terminus/dist/health-check/health-check.service";
export declare class HealthCheckController {
    private readonly health;
    constructor(health: HealthCheckService);
    checkLiveness(): Promise<import("@nestjs/terminus").HealthCheckResult>;
    checkReadiness(): Promise<import("@nestjs/terminus").HealthCheckResult>;
    checkStartup(): Promise<import("@nestjs/terminus").HealthCheckResult>;
}
