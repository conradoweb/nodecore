import { AppBadRequestResult } from "../models/app-bad-request-result.model";
import { AppErrorResult } from "../models/app-error-result.model";
import { AppException } from "../exceptions/app.exception";
import { ParseUUIDPipe } from "@nestjs/common/pipes/parse-uuid.pipe";

export class AppParseUUIDPipe extends ParseUUIDPipe {
  constructor(version?: "3" | "4" | "5") {
    super({
      version,
      errorHttpStatusCode: 400,
      exceptionFactory: (error: string) => {
        return new AppException(
          new AppBadRequestResult([new AppErrorResult(error)])
        );
      },
    });
  }
}
