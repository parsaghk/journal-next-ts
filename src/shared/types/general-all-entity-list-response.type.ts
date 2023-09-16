import { TAbstractFilter, TAbstractSort } from '@shared/types';

export type TGeneralAllEntityListRequest<
  K = TAbstractFilter,
  V = TAbstractSort,
> = {
  filters?: K;
  sorts?: V;
};
