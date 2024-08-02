"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppResult = void 0;
class AppResult {
    constructor(code, description, message, data, errors, meta) {
        this.code = code;
        this.description = description;
        this.message = message;
        if (data)
            this.data = data;
        if (errors?.length > 0)
            this.errors = errors;
        this.meta = meta;
    }
    getCode() {
        return this.code;
    }
    getDescription() {
        return this.description;
    }
    getMessage() {
        return this.message;
    }
    getData() {
        return this.data;
    }
    getErrors() {
        return this.errors;
    }
    getMeta() {
        return this.meta;
    }
    setCode(code) {
        this.code = code;
        return this;
    }
    setMessage(message) {
        this.message = message;
        return this;
    }
    setData(data) {
        this.data = data;
        return this;
    }
    setMeta(meta) {
        this.meta = meta;
        return this;
    }
    addError(error) {
        this.addErrors([error]);
    }
    addErrors(errors) {
        if (this.errors === null || this.errors === undefined) {
            this.errors = [];
        }
        if (this.code < 400) {
            this.code = 422;
            this.description = "Unprocessable";
            this.message = "Do not repeat request without modification.";
            this.data = undefined;
            this.meta = undefined;
        }
        this.errors.push(...errors);
    }
}
exports.AppResult = AppResult;
//# sourceMappingURL=app-result.model.js.map