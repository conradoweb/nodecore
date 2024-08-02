import { ExceptionFilter } from "@nestjs/common/interfaces/exceptions/exception-filter.interface";
import { ArgumentsHost } from "@nestjs/common/interfaces/features/arguments-host.interface";
import { NotFoundException } from "@nestjs/common/exceptions/not-found.exception";
export declare class AppNotFoundExceptionFilter implements ExceptionFilter {
    catch(exception: NotFoundException, host: ArgumentsHost): void;
}
