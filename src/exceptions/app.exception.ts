import { HttpException } from "@nestjs/common/exceptions/http.exception";
import { IAppResult } from "../interfaces/app-result.interface";
import { AppErrorResult } from "../models/app-error-result.model";

export class AppException extends HttpException {
  private code: number;
  private errors: AppErrorResult[];
  constructor(response: IAppResult) {
    super(response, response.getCode());
    this.code = response.getCode();
    this.errors = response.getErrors();
  }
  getData(): null | undefined {
    return null;
  }
  getCode(): number {
    return this.code;
  }
  getErrors() {
    return this.errors;
  }
}
