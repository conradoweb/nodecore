import { ExceptionFilter } from "@nestjs/common/interfaces/exceptions/exception-filter.interface";
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import { ArgumentsHost } from "@nestjs/common/interfaces/features/arguments-host.interface";
export declare class AppExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
