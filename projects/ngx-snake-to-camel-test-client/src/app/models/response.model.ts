export class Response<T> {
  page: number;
  perPage: number;
  total: number;
  totalPage: number;
  data: T[];

  constructor(
    page: number,
    perPage: number,
    total: number,
    totalPage: number,
    data: T[],
  ) {
    this.page = page;
    this.perPage = perPage;
    this.total = total;
    this.totalPage = totalPage;
    this.data = data;
  }
}
