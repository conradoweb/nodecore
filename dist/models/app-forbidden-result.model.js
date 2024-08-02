"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppForbiddenResult = void 0;
const app_result_model_1 = require("./app-result.model");
class AppForbiddenResult extends app_result_model_1.AppResult {
    constructor() {
        super(403, "Forbidden", "You don't have permission to access this service");
    }
}
exports.AppForbiddenResult = AppForbiddenResult;
//# sourceMappingURL=app-forbidden-result.model.js.map