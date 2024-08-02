"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppErrorResult = void 0;
class AppErrorResult {
    constructor(message, code, nativeMessage, trackId, parameters) {
        this.message = message;
        this.code = code;
        this.nativeMessage = nativeMessage;
        this.trackId = trackId;
        this.parameters = parameters;
    }
}
exports.AppErrorResult = AppErrorResult;
//# sourceMappingURL=app-error-result.model.js.map