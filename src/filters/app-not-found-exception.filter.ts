import { Catch } from "@nestjs/common/decorators/core/catch.decorator";
import { ExceptionFilter } from "@nestjs/common/interfaces/exceptions/exception-filter.interface";
import { ArgumentsHost } from "@nestjs/common/interfaces/features/arguments-host.interface";
import { Response } from "express";
import { NotFoundException } from "@nestjs/common/exceptions/not-found.exception";
import { AppNotFoundResult } from "../models/app-not-found-result.model";

@Catch(NotFoundException)
export class AppNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    if (host.getType() !== "http") {
      throw exception;
    }
    const response = host.switchToHttp().getResponse<Response>();
    response.status(404).json(new AppNotFoundResult(exception.message));
  }
}
