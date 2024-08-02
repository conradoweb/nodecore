"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppInternalServerErrorResult = void 0;
const app_result_model_1 = require("./app-result.model");
class AppInternalServerErrorResult extends app_result_model_1.AppResult {
    constructor(errors) {
        super(500, "Internal Server Error", "Exception", undefined, errors);
    }
}
exports.AppInternalServerErrorResult = AppInternalServerErrorResult;
//# sourceMappingURL=app-internal-server-error-result.model.js.map