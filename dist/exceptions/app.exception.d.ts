import { HttpException } from "@nestjs/common/exceptions/http.exception";
import { IAppResult } from "../interfaces/app-result.interface";
import { AppErrorResult } from "../models/app-error-result.model";
export declare class AppException extends HttpException {
    private code;
    private errors;
    constructor(response: IAppResult);
    getData(): null | undefined;
    getCode(): number;
    getErrors(): AppErrorResult[];
}
