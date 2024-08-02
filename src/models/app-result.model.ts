import { IAppResult } from "../interfaces/app-result.interface";
import { AppErrorResult } from "./app-error-result.model";
import { AppMeta } from "./app-meta.model";

export class AppResult<T = any> implements IAppResult<T> {
  private code: number;
  private description?: string;
  private message?: string;
  private data?: T;
  private errors?: AppErrorResult[];
  private meta?: AppMeta;

  constructor(
    code: number,
    description?: string,
    message?: string,
    data?: T,
    errors?: AppErrorResult[],
    meta?: AppMeta
  ) {
    this.code = code;
    this.description = description;
    this.message = message;
    if (data) this.data = data;
    if (errors?.length > 0) this.errors = errors;
    this.meta = meta;
  }

  getCode(): number {
    return this.code;
  }
  getDescription(): string | null | undefined {
    return this.description;
  }
  getMessage(): string | null | undefined {
    return this.message;
  }
  getData(): T | null | undefined {
    return this.data;
  }
  getErrors(): AppErrorResult[] | null | undefined {
    return this.errors;
  }
  getMeta(): any {
    return this.meta;
  }
  setCode(code: number): this {
    this.code = code;
    return this;
  }
  setMessage(message: string): this {
    this.message = message;
    return this;
  }
  setData(data: T): this {
    this.data = data;
    return this;
  }
  setMeta(meta: any): this {
    this.meta = meta;
    return this;
  }
  addError(error: AppErrorResult): void {
    this.addErrors([error]);
  }
  addErrors(errors: AppErrorResult[]): void {
    if (this.errors === null || this.errors === undefined) {
      this.errors = [];
    }
    if (this.code < 400) {
      this.code = 422;
      this.description = "Unprocessable";
      this.message = "Do not repeat request without modification.";
      this.data = undefined;
      this.meta = undefined;
    }
    this.errors.push(...errors);
  }
}
