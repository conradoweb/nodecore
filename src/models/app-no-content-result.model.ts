import { AppResult } from "./app-result.model";

export class AppNoContentResult extends AppResult<any> {
  constructor() {
    super(204);
  }
}
