import { SortEnum } from '@shared/enums';
import { TAbstractSort } from '@shared/types';

export type TSortArticles = TAbstractSort & {
  title?: SortEnum;
};
