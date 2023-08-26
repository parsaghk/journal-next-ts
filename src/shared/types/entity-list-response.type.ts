import { TPageMeta } from './page-meta.type';

export type TEntityListResponse<T> = {
  data: T;
  meta: TPageMeta;
};
