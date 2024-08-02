"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppAcceptedResult = void 0;
const app_result_model_1 = require("./app-result.model");
class AppAcceptedResult extends app_result_model_1.AppResult {
    constructor(transactionId) {
        super(202, "Accepted", "Success", { transactionId });
    }
}
exports.AppAcceptedResult = AppAcceptedResult;
//# sourceMappingURL=app-accepted-result.model.js.map