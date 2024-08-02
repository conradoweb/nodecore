"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppOkResult = void 0;
const app_result_model_1 = require("./app-result.model");
class AppOkResult extends app_result_model_1.AppResult {
    constructor(data, meta) {
        super(200, "Ok", "Success", data, [], meta);
    }
}
exports.AppOkResult = AppOkResult;
//# sourceMappingURL=app-ok-result.model.js.map