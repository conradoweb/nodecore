export class AppMeta {
  totalItems: number;
  totalPages: number;
  pageSize: number;
  page: number;
  constructor(
    totalItems: number | undefined,
    totalPages: number | undefined,
    pageSize: number | undefined,
    page: number | undefined
  ) {
    if (!!totalItems && !!totalPages && !!pageSize && !!page) {
      this.totalItems = totalItems;
      this.totalPages = totalPages;
      this.pageSize = pageSize;
      this.page = page;
    } else {
      this.default(Number(totalItems));
    }
  }

  default(totalItems: number) {
    this.totalItems = totalItems;
    this.totalPages = 1;
    this.pageSize = totalItems;
    this.page = 1;
  }
}
