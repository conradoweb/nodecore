import { Catch } from "@nestjs/common/decorators/core/catch.decorator";
import { AppException } from "../exceptions/app.exception";
import { ExceptionFilter } from "@nestjs/common/interfaces/exceptions/exception-filter.interface";
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import { ArgumentsHost } from "@nestjs/common/interfaces/features/arguments-host.interface";
import { Response } from "express";

@Catch(AppException)
export class AppExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    if (host.getType() !== "http") {
      throw exception;
    }

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    response.status(exception.getStatus()).json(exception.getResponse());
  }
}
