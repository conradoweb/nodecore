import { ValidationError } from "@nestjs/common/interfaces/external/validation-error.interface";
import { ValidationPipe } from "@nestjs/common/pipes/validation.pipe";
import { AppBadRequestResult } from "../models/app-bad-request-result.model";
import { AppErrorResult } from "../models/app-error-result.model";
import { AppException } from "../exceptions/app.exception";

export class AppValidationPipe extends ValidationPipe {
  constructor() {
    super({
      stopAtFirstError: false,
      whitelist: true,
      forbidNonWhitelisted: true,
      dismissDefaultMessages: false,
      exceptionFactory: (errors: ValidationError[]) => {
        const resultErrors = new Array<AppErrorResult>();
        this.exceptionFactoryChildrens(errors, resultErrors);
        const result = new AppBadRequestResult(resultErrors);
        return new AppException(result);
      },
    });
  }

  exceptionFactoryChildrens(
    errors: ValidationError[],
    resultErrors: AppErrorResult[]
  ): void {
    if (errors != null && errors.length > 0) {
      errors.forEach((error) => {
        if (error.children != null && error.children.length > 0) {
          this.exceptionFactoryChildrens(error.children, resultErrors);
        }
        if (error.constraints != null) {
          Object.values(error.constraints).forEach((constraintValue) => {
            resultErrors.push(new AppErrorResult(constraintValue));
          });
        }
      });
    }
  }
}
