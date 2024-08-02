import { AppResult } from "./app-result.model";

export class AppForbiddenResult extends AppResult<any> {
  constructor() {
    super(403, "Forbidden", "You don't have permission to access this service");
  }
}
