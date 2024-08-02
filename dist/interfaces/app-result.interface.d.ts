import { AppErrorResult } from "../models/app-error-result.model";
export interface IAppResult<T = any> {
    getCode(): number;
    getDescription(): string | null | undefined;
    getMessage(): string | null | undefined;
    getData(): T | null | undefined;
    getErrors(): Array<AppErrorResult> | null | undefined;
    getMeta(): any;
    setCode(code: number): this;
    setMessage(message: string): this;
    setData(data: T): this;
    setMeta(meta: any): this;
    addError(error: AppErrorResult): void;
    addErrors(errors: AppErrorResult[]): void;
}
