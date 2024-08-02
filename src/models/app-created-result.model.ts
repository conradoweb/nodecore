import { AppResult } from "./app-result.model";

export class AppCreatedResult<T = any> extends AppResult<T> {
  constructor(data?: T) {
    super(201, "Created", "Success", data);
  }
}
