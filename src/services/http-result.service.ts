import { Injectable, Logger } from "@nestjs/common";
import { AppResult } from "../models/app-result.model";
import { AppBadGatewayResult } from "../models/app-bad-gateway-result";
import { AppBadRequestResult } from "../models/app-bad-request-result.model";
import { AppInternalServerErrorResult } from "../models/app-internal-server-error-result.model";
import { AppNotFoundResult } from "../models/app-not-found-result.model";
import { AppErrorResult } from "../models/app-error-result.model";
import { AppCreatedResult } from "../models/app-created-result.model";
import { AppAcceptedResult } from "../models/app-accepted-result.model";
import { AppNoContentResult } from "../models/app-no-content-result.model";
import { AppUnauthorizedResult } from "../models/app-unauthorized-result.model";
import { AppForbiddenResult } from "../models/app-forbidden-result.model";
import { AppOkResult } from "../models/app-ok-result.model";
import { AppException } from "../exceptions/app.exception";
import { ResultDto } from "@core/dto/result.dto";
import { AppGoneResult } from "../models/app-gone-result.model";

@Injectable()
export class HttpResultService {
  private readonly logger = new Logger(HttpResultService.name);

  public createResult(
    status: number,
    data: ResultDto<any> = ResultDto.emptyResult(),
    errors: AppErrorResult[] = [new AppErrorResult("")],
    paginationOptions?: any,
    parameters?: string
  ): AppResult | AppException {
    this.logger.log(`Try to create result ${status}`);
    switch (status) {
      case 200:
        this.logger.log(`Created result 200`);
        return new AppOkResult(data.data, data.meta);
      case 201:
        this.logger.log(`Created result 201`);
        return new AppCreatedResult(data.data);
      case 202:
        this.logger.log(`Created result 202`);
        return new AppAcceptedResult(errors.map((e) => e.message).join(","));
      case 204:
        this.logger.log(`Created result 204`);
        return new AppNoContentResult();
      case 400:
        this.logger.log(`Created result 400`);
        return new AppException(new AppBadRequestResult(errors));
      case 401:
        this.logger.log(`Created result 401`);
        this.logger.log(errors.map((e) => e.message).join(","));
        return new AppException(new AppUnauthorizedResult());
      case 403:
        this.logger.log(`Created result 403`);
        this.logger.log(errors.map((e) => e.message).join(","));
        return new AppException(new AppForbiddenResult());
      case 404:
        this.logger.log(`Created result 404`);
        return new AppException(
          new AppNotFoundResult(errors.map((e) => e.message).join(","))
        );
      case 410:
        this.logger.log(`Created result 410`);
        return new AppException(
          new AppGoneResult(errors.map((e) => e.message).join(","))
        );
      case 500:
        this.logger.log(`Created result 500`);
        return new AppException(new AppInternalServerErrorResult(errors));
      case 502:
        this.logger.log(`Created result 502`);
        return new AppException(new AppBadGatewayResult(errors[0], parameters));
      default:
        this.logger.log(`Created result by default status`);
        return new AppException(
          new AppNotFoundResult(errors.map((e) => e.message).join(","))
        );
    }
  }
}
