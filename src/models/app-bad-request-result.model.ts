import { AppResult } from "./app-result.model";
import { AppErrorResult } from "./app-error-result.model";

export class AppBadRequestResult extends AppResult<any> {
  constructor(errors: AppErrorResult[]) {
    super(
      400,
      "Bad Request",
      "Data input not supplied or invalid.",
      undefined,
      errors
    );
  }
}
