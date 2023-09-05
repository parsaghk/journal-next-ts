import { SortEnum } from '@shared/enums';
import { TAbstractSort } from '@shared/types';

export type TSortArticleCategories = TAbstractSort & {
  title?: SortEnum;
};
