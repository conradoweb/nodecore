/// <reference types="node" />
import { LoggerService } from "@nestjs/common";
import { AsyncLocalStorage } from "async_hooks";
export declare enum Severity {
    INFO = "INFO",
    FATAL = "FATAL",
    ERROR = "ERROR",
    WARN = "WARN",
    DEBUG = "DEBUG"
}
export declare class FilteredLogger implements LoggerService {
    private als;
    constructor(als: AsyncLocalStorage<any>);
    private logLevel;
    setLogLevel(level: Severity[]): void;
    log(data: any): void;
    error(data: any): void;
    warn(data: any): void;
    debug(data: any): void;
    private blockVariables;
    private convertJson;
    private replaceValue;
    private getReservedWord;
    private getHidedKeyValues;
    private findAndReplaceJsonValue;
    private customize;
    setLocalStorage(als: AsyncLocalStorage<any>): void;
    private filterDoubleQuotes;
}
