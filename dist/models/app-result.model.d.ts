import { IAppResult } from "../interfaces/app-result.interface";
import { AppErrorResult } from "./app-error-result.model";
import { AppMeta } from "./app-meta.model";
export declare class AppResult<T = any> implements IAppResult<T> {
    private code;
    private description?;
    private message?;
    private data?;
    private errors?;
    private meta?;
    constructor(code: number, description?: string, message?: string, data?: T, errors?: AppErrorResult[], meta?: AppMeta);
    getCode(): number;
    getDescription(): string | null | undefined;
    getMessage(): string | null | undefined;
    getData(): T | null | undefined;
    getErrors(): AppErrorResult[] | null | undefined;
    getMeta(): any;
    setCode(code: number): this;
    setMessage(message: string): this;
    setData(data: T): this;
    setMeta(meta: any): this;
    addError(error: AppErrorResult): void;
    addErrors(errors: AppErrorResult[]): void;
}
