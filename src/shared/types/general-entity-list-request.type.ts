import { TAbstractFilter } from './abstract-filter.type';
import { TAbstractSort } from './abstract-sort.type';
import { TGeneralAllEntityListRequest } from './general-all-entity-list-response.type';
import { TPagination } from './pagination.type';

export type TGeneralEntityListRequest<
  K = TAbstractFilter,
  V = TAbstractSort,
> = TGeneralAllEntityListRequest<K, V> & {
  pagination?: TPagination;
};
