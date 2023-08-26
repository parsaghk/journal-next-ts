import { SortEnum } from '@shared/enums';
import { TAbstractSort } from '@shared/types';

export type TSortStates = TAbstractSort & {
  title?: SortEnum;
};
