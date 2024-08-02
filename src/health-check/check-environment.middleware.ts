import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { hasMinimumEnvironment } from "../utils/util";
import { HealthCheckError } from "@nestjs/terminus";


export const requiredEnvs = [
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

@Injectable()
export class CheckEnvironmentMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const checkEnvironment = await hasMinimumEnvironment(requiredEnvs);
    if (!checkEnvironment.ok) {
      throw new HealthCheckError(checkEnvironment.message, {});
    }
    next();
  }
}
