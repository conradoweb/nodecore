export declare enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
}
export declare class PaginationDto {
    page: number;
    pageSize: number;
    orderBy?: string;
    sortOrder?: SortOrder;
}
