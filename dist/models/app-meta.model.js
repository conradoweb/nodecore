"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppMeta = void 0;
class AppMeta {
    constructor(totalItems, totalPages, pageSize, page) {
        if (!!totalItems && !!totalPages && !!pageSize && !!page) {
            this.totalItems = totalItems;
            this.totalPages = totalPages;
            this.pageSize = pageSize;
            this.page = page;
        }
        else {
            this.default(Number(totalItems));
        }
    }
    default(totalItems) {
        this.totalItems = totalItems;
        this.totalPages = 1;
        this.pageSize = totalItems;
        this.page = 1;
    }
}
exports.AppMeta = AppMeta;
//# sourceMappingURL=app-meta.model.js.map