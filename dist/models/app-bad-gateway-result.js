"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppBadGatewayResult = void 0;
const app_result_model_1 = require("./app-result.model");
class AppBadGatewayResult extends app_result_model_1.AppResult {
    constructor(error, parameters) {
        super(502, "Bad Gateway", `${error.constructor.name} ${error.message}`, {
            parameters,
        });
    }
}
exports.AppBadGatewayResult = AppBadGatewayResult;
//# sourceMappingURL=app-bad-gateway-result.js.map