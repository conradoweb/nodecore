import { AppErrorResult } from "./app-error-result.model";
import { AppResult } from "./app-result.model";
export declare class AppBadGatewayResult extends AppResult<any> {
    constructor(error: AppErrorResult, parameters?: string);
}
