"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppBadRequestResult = void 0;
const app_result_model_1 = require("./app-result.model");
class AppBadRequestResult extends app_result_model_1.AppResult {
    constructor(errors) {
        super(400, "Bad Request", "Data input not supplied or invalid.", undefined, errors);
    }
}
exports.AppBadRequestResult = AppBadRequestResult;
//# sourceMappingURL=app-bad-request-result.model.js.map