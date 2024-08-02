import { AppMeta } from "../models/app-meta.model";
export class ResultDto<T> {
  public data: Array<T> | T | null;
  public total? = 0;
  public meta?: AppMeta;

  public static emptyResult() {
    return { data: null };
  }
}
