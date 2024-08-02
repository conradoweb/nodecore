import { AppMeta } from "./app-meta.model";
import { AppResult } from "./app-result.model";

export class AppOkResult<T = any> extends AppResult<T> {
  constructor(data?: T, meta?: AppMeta) {
    super(200, "Ok", "Success", data, [], meta);
  }
}
