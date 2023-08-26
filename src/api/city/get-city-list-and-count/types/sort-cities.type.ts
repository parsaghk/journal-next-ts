import { SortEnum } from '@shared/enums';
import { TAbstractSort } from '@shared/types';

export type TSortCities = TAbstractSort & {
  title?: SortEnum;
};
