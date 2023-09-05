import { TAbstractFilter } from './abstract-filter.type';
import { TAbstractSort } from './abstract-sort.type';
import { TPagination } from './pagination.type';

export type TGeneralEntityListRequest<
  K = TAbstractFilter,
  V = TAbstractSort,
> = {
  filters?: K;
  pagination?: TPagination;
  sorts?: V;
};
