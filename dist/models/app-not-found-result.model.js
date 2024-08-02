"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppNotFoundResult = void 0;
const app_result_model_1 = require("./app-result.model");
class AppNotFoundResult extends app_result_model_1.AppResult {
    constructor(message) {
        super(404, "Not Found", message);
    }
}
exports.AppNotFoundResult = AppNotFoundResult;
//# sourceMappingURL=app-not-found-result.model.js.map