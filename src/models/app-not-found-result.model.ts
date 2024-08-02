import { AppResult } from "./app-result.model";

export class AppNotFoundResult extends AppResult<any> {
  constructor(message: string) {
    super(404, "Not Found", message);
  }
}
