import { getEnvironment } from "@core/utils/util";
import { LoggerService } from "@nestjs/common";
import { AsyncLocalStorage } from "async_hooks";

export enum Severity {
  INFO = "INFO",
  FATAL = "FATAL",
  ERROR = "ERROR",
  WARN = "WARN",
  DEBUG = "DEBUG",
}

export class FilteredLogger implements LoggerService {
  constructor(private als: AsyncLocalStorage<any>) {
    const nodeEnv = getEnvironment("NODE_ENV");
    const logLevel = [Severity.INFO, Severity.ERROR];
    if (nodeEnv == null || nodeEnv === "dev" || nodeEnv === "qa") {
      logLevel.push(Severity.DEBUG, Severity.WARN);
    }
    this.setLogLevel(logLevel);
  }
  private logLevel: Severity[] = [
    Severity.INFO,
    Severity.ERROR,
    Severity.DEBUG,
  ];

  setLogLevel(level: Severity[]) {
    this.logLevel = level;
  }

  log(data: any): void {
    if (this.logLevel.includes(Severity.INFO)) {
      console.info(this.customize(this.blockVariables(data), Severity.INFO));
    }
  }

  error(data: any): void {
    if (this.logLevel.includes(Severity.ERROR)) {
      console.error(this.customize(this.blockVariables(data), Severity.ERROR));
    }
  }

  warn(data: any): void {
    if (this.logLevel.includes(Severity.WARN)) {
      console.warn(this.customize(this.blockVariables(data), Severity.WARN));
    }
  }

  debug(data: any): void {
    if (this.logLevel.includes(Severity.DEBUG)) {
      console.debug(this.customize(this.blockVariables(data), Severity.DEBUG));
    }
  }

  private blockVariables(data: any): string {
    let stringValue = "";
    if (data === "string") {
      stringValue = data.toString();
    } else {
      stringValue = this.convertJson(data);
    }
    const hidedKeyValues = this.getHidedKeyValues();
    for (const word of hidedKeyValues) {
      stringValue = this.replaceValue(word, stringValue);
    }
    return stringValue;
  }

  private convertJson(data: any): string {
    try {
      return JSON.stringify(data);
    } catch (error) {
      this.error(`Error on json translation: ${error.message}`);
      throw new Error(`JSON PARSED ERROR on Logger: ${error.stack}`);
    }
  }

  private replaceValue(searchStr: string, sourceStr: string): string {
    sourceStr = this.findAndReplaceJsonValue(sourceStr, searchStr);
    return sourceStr;
  }

  private getReservedWord(): string {
    return "[FILTERED]";
  }

  private getHidedKeyValues(): string[] {
    return [
      "cpf",
      "name",
      "cnpj",
      "rg",
      "email",
      "address",
      "twitter",
      "facebook",
      "birthdate",
      "street",
      "number",
      "postal_code",
      "city",
      "district",
      "complement",
      "password",
    ];
  }

  private findAndReplaceJsonValue(input: string, key: string): string {
    const regex = new RegExp(`("${key}":")([^"]*)`, "g");
    return input.replace(regex, `$1${this.getReservedWord()}`);
  }
  private customize(message: string, severity: Severity): string {
    const store = this.als?.getStore();
    return `time=${new Date().toISOString()} severity=${severity} transactionId=${
      store?.["requestId"] || ""
    } traceId=${store?.["traceId"] || ""} msg="${this.filterDoubleQuotes(
      message
    ).replace(/^'|'$/g, "")}"`;
  }

  public setLocalStorage(als: AsyncLocalStorage<any>) {
    this.als = als;
  }
  private filterDoubleQuotes(message: string) {
    return message.replace(/"/g, "'").replace(/\n/g, " ");
  }
}
