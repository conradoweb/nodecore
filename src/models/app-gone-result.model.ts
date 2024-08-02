import { AppResult } from "./app-result.model";

export class AppGoneResult extends AppResult<any> {
  constructor(message: string) {
    super(410, "Content already deleted or not exist.", message);
  }
}
