"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRequestCodeResponse = exports.hasMinimumEnvironment = exports.getEnvironment = void 0;
const app_error_result_model_1 = require("../models/app-error-result.model");
const getEnvironment = (key, throwException = false) => {
    const env = process.env[key];
    if (env === null || env === undefined) {
        if (throwException) {
            throw new app_error_result_model_1.AppErrorResult(`Environment ${key} not found.`);
        }
        return null;
    }
    return env;
};
exports.getEnvironment = getEnvironment;
const hasMinimumEnvironment = async (minimumEnvs) => {
    for await (const env of minimumEnvs) {
        if ((0, exports.getEnvironment)(env) == null) {
            return { ok: false, message: `Environment key '${env}' is not defined` };
        }
    }
    return { ok: true, message: "Every Environment keys are defined" };
};
exports.hasMinimumEnvironment = hasMinimumEnvironment;
const defaultRequestCodeResponse = (method, code) => {
    switch (method.toLowerCase()) {
        case "post":
            return 201;
        case "put":
            return 200;
        case "delete":
            return 204;
        case "get":
            return 200;
        default:
            return code;
    }
};
exports.defaultRequestCodeResponse = defaultRequestCodeResponse;
//# sourceMappingURL=util.js.map