import { AppResult } from "./app-result.model";
import { AppErrorResult } from "./app-error-result.model";

export class AppInternalServerErrorResult extends AppResult<any> {
  constructor(errors?: AppErrorResult[]) {
    super(500, "Internal Server Error", "Exception", undefined, errors);
  }
}
