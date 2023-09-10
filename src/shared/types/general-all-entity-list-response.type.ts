import { TAbstractFilter } from '@shared/types/abstract-filter.type';
import { TAbstractSort } from '@shared/types/abstract-sort.type';

export type TGeneralAllEntityListRequest<
  K = TAbstractFilter,
  V = TAbstractSort,
> = {
  filters?: K;
  sorts?: V;
};
