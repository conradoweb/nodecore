import { ValidationError } from "@nestjs/common/interfaces/external/validation-error.interface";
import { ValidationPipe } from "@nestjs/common/pipes/validation.pipe";
import { AppErrorResult } from "../models/app-error-result.model";
export declare class AppValidationPipe extends ValidationPipe {
    constructor();
    exceptionFactoryChildrens(errors: ValidationError[], resultErrors: AppErrorResult[]): void;
}
