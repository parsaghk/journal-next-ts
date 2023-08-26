import { SortEnum } from '@shared/enums';
import { TAbstractSort } from '@shared/types';

export type TSortCountries = TAbstractSort & {
  title: SortEnum;
};
