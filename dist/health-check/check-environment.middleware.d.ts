import { NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
export declare const requiredEnvs: string[];
export declare class CheckEnvironmentMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
