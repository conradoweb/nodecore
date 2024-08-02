import { Catch } from "@nestjs/common/decorators/core/catch.decorator";
import { Response } from "express";
import { NotFoundException } from "@nestjs/common/exceptions/not-found.exception";
import { ExceptionFilter } from "@nestjs/common/interfaces/exceptions/exception-filter.interface";
import { ArgumentsHost } from "@nestjs/common/interfaces/features/arguments-host.interface";
import { AppInternalServerErrorResult } from "../models/app-internal-server-error-result.model";
import { Logger } from "@nestjs/common";

@Catch()
export class AppAllExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(AppAllExceptionFilter.name);

  catch(exception: NotFoundException, host: ArgumentsHost) {
    if (host.getType() !== "http") {
      throw exception;
    }
    this.logger.error(`Not handled exception: ${exception.message}`);
    this.logger.error(`Stacktrace: ${exception.stack}`);

    const response = host.switchToHttp().getResponse<Response>();
    response.status(500).json(new AppInternalServerErrorResult());
  }
}
