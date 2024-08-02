export declare class AppMeta {
    totalItems: number;
    totalPages: number;
    pageSize: number;
    page: number;
    constructor(totalItems: number | undefined, totalPages: number | undefined, pageSize: number | undefined, page: number | undefined);
    default(totalItems: number): void;
}
