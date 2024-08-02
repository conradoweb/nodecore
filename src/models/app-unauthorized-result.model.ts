import { AppResult } from "./app-result.model";

export class AppUnauthorizedResult extends AppResult<any> {
  constructor() {
    super(
      401,
      "Unauthorized",
      "Access is denied due invalid credentials for this requisition"
    );
  }
}
