import { AppMeta } from "./app-meta.model";
import { AppResult } from "./app-result.model";
export declare class AppOkResult<T = any> extends AppResult<T> {
    constructor(data?: T, meta?: AppMeta);
}
