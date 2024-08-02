"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppGoneResult = void 0;
const app_result_model_1 = require("./app-result.model");
class AppGoneResult extends app_result_model_1.AppResult {
    constructor(message) {
        super(410, "Content already deleted or not exist.", message);
    }
}
exports.AppGoneResult = AppGoneResult;
//# sourceMappingURL=app-gone-result.model.js.map