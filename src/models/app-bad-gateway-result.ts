import { AppErrorResult } from "./app-error-result.model";
import { AppResult } from "./app-result.model";

export class AppBadGatewayResult extends AppResult<any> {
  constructor(error: AppErrorResult, parameters?: string) {
    super(502, "Bad Gateway", `${error.constructor.name} ${error.message}`, {
      parameters,
    });
  }
}
