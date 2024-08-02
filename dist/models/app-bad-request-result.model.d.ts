import { AppResult } from "./app-result.model";
import { AppErrorResult } from "./app-error-result.model";
export declare class AppBadRequestResult extends AppResult<any> {
    constructor(errors: AppErrorResult[]);
}
