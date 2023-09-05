import { SortEnum } from '@shared/enums';
import { TAbstractSort } from '@shared/types';

export type TSortArticleTypes = TAbstractSort & {
  title?: SortEnum;
};
