import { AppMeta } from "../models/app-meta.model";
export declare class ResultDto<T> {
    data: Array<T> | T | null;
    total?: number;
    meta?: AppMeta;
    static emptyResult(): {
        data: any;
    };
}
