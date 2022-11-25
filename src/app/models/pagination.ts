import { Product } from "./product";

export interface pagination {
  pageIndex?: number;
  pageSize?: number;
  count?: number;
  data?: Product[];
}
