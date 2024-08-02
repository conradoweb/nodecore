import { AppResult } from "../models/app-result.model";
import { AppErrorResult } from "../models/app-error-result.model";
import { AppException } from "../exceptions/app.exception";
import { ResultDto } from "@core/dto/result.dto";
export declare class HttpResultService {
    private readonly logger;
    createResult(status: number, data?: ResultDto<any>, errors?: AppErrorResult[], paginationOptions?: any, parameters?: string): AppResult | AppException;
}
