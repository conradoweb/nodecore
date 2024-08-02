import { AppResult } from "./app-result.model";

export class AppAcceptedResult extends AppResult<any> {
  constructor(transactionId: string) {
    super(202, "Accepted", "Success", { transactionId });
  }
}
