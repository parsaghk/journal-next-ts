import { SortEnum } from '@shared/enums';
import { TAbstractSort } from '@shared/types';

export type TSortUsers = TAbstractSort & {
  content?: SortEnum;
  type?: SortEnum;
};
