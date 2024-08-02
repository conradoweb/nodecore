"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppCreatedResult = void 0;
const app_result_model_1 = require("./app-result.model");
class AppCreatedResult extends app_result_model_1.AppResult {
    constructor(data) {
        super(201, "Created", "Success", data);
    }
}
exports.AppCreatedResult = AppCreatedResult;
//# sourceMappingURL=app-created-result.model.js.map