"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilteredLogger = exports.Severity = void 0;
const util_1 = require("@core/utils/util");
var Severity;
(function (Severity) {
    Severity["INFO"] = "INFO";
    Severity["FATAL"] = "FATAL";
    Severity["ERROR"] = "ERROR";
    Severity["WARN"] = "WARN";
    Severity["DEBUG"] = "DEBUG";
})(Severity = exports.Severity || (exports.Severity = {}));
class FilteredLogger {
    constructor(als) {
        this.als = als;
        this.logLevel = [
            Severity.INFO,
            Severity.ERROR,
            Severity.DEBUG,
        ];
        const nodeEnv = (0, util_1.getEnvironment)("NODE_ENV");
        const logLevel = [Severity.INFO, Severity.ERROR];
        if (nodeEnv == null || nodeEnv === "dev" || nodeEnv === "qa") {
            logLevel.push(Severity.DEBUG, Severity.WARN);
        }
        this.setLogLevel(logLevel);
    }
    setLogLevel(level) {
        this.logLevel = level;
    }
    log(data) {
        if (this.logLevel.includes(Severity.INFO)) {
            console.info(this.customize(this.blockVariables(data), Severity.INFO));
        }
    }
    error(data) {
        if (this.logLevel.includes(Severity.ERROR)) {
            console.error(this.customize(this.blockVariables(data), Severity.ERROR));
        }
    }
    warn(data) {
        if (this.logLevel.includes(Severity.WARN)) {
            console.warn(this.customize(this.blockVariables(data), Severity.WARN));
        }
    }
    debug(data) {
        if (this.logLevel.includes(Severity.DEBUG)) {
            console.debug(this.customize(this.blockVariables(data), Severity.DEBUG));
        }
    }
    blockVariables(data) {
        let stringValue = "";
        if (data === "string") {
            stringValue = data.toString();
        }
        else {
            stringValue = this.convertJson(data);
        }
        const hidedKeyValues = this.getHidedKeyValues();
        for (const word of hidedKeyValues) {
            stringValue = this.replaceValue(word, stringValue);
        }
        return stringValue;
    }
    convertJson(data) {
        try {
            return JSON.stringify(data);
        }
        catch (error) {
            this.error(`Error on json translation: ${error.message}`);
            throw new Error(`JSON PARSED ERROR on Logger: ${error.stack}`);
        }
    }
    replaceValue(searchStr, sourceStr) {
        sourceStr = this.findAndReplaceJsonValue(sourceStr, searchStr);
        return sourceStr;
    }
    getReservedWord() {
        return "[FILTERED]";
    }
    getHidedKeyValues() {
        return [
            "cpf",
            "name",
            "cnpj",
            "rg",
            "email",
            "address",
            "twitter",
            "facebook",
            "birthdate",
            "street",
            "number",
            "postal_code",
            "city",
            "district",
            "complement",
            "password",
        ];
    }
    findAndReplaceJsonValue(input, key) {
        const regex = new RegExp(`("${key}":")([^"]*)`, "g");
        return input.replace(regex, `$1${this.getReservedWord()}`);
    }
    customize(message, severity) {
        const store = this.als?.getStore();
        return `time=${new Date().toISOString()} severity=${severity} transactionId=${store?.["requestId"] || ""} traceId=${store?.["traceId"] || ""} msg="${this.filterDoubleQuotes(message).replace(/^'|'$/g, "")}"`;
    }
    setLocalStorage(als) {
        this.als = als;
    }
    filterDoubleQuotes(message) {
        return message.replace(/"/g, "'").replace(/\n/g, " ");
    }
}
exports.FilteredLogger = FilteredLogger;
//# sourceMappingURL=filtered-logger.class.js.map