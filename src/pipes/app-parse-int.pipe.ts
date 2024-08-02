import { ParseIntPipe } from "@nestjs/common/pipes/parse-int.pipe";
import { AppBadRequestResult } from "../models/app-bad-request-result.model";
import { AppErrorResult } from "../models/app-error-result.model";
import { AppException } from "../exceptions/app.exception";

export class AppParseIntPipe extends ParseIntPipe {
  constructor() {
    super({
      errorHttpStatusCode: 400,
      exceptionFactory: (error: string) => {
        return new AppException(
          new AppBadRequestResult([new AppErrorResult(error)])
        );
      },
    });
  }
}
