"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUnauthorizedResult = void 0;
const app_result_model_1 = require("./app-result.model");
class AppUnauthorizedResult extends app_result_model_1.AppResult {
    constructor() {
        super(401, "Unauthorized", "Access is denied due invalid credentials for this requisition");
    }
}
exports.AppUnauthorizedResult = AppUnauthorizedResult;
//# sourceMappingURL=app-unauthorized-result.model.js.map