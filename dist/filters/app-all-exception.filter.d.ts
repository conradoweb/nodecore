import { NotFoundException } from "@nestjs/common/exceptions/not-found.exception";
import { ExceptionFilter } from "@nestjs/common/interfaces/exceptions/exception-filter.interface";
import { ArgumentsHost } from "@nestjs/common/interfaces/features/arguments-host.interface";
export declare class AppAllExceptionFilter implements ExceptionFilter {
    private readonly logger;
    catch(exception: NotFoundException, host: ArgumentsHost): void;
}
