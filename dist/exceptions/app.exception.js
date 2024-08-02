"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppException = void 0;
const http_exception_1 = require("@nestjs/common/exceptions/http.exception");
class AppException extends http_exception_1.HttpException {
    constructor(response) {
        super(response, response.getCode());
        this.code = response.getCode();
        this.errors = response.getErrors();
    }
    getData() {
        return null;
    }
    getCode() {
        return this.code;
    }
    getErrors() {
        return this.errors;
    }
}
exports.AppException = AppException;
//# sourceMappingURL=app.exception.js.map