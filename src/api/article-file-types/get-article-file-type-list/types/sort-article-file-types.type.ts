import { SortEnum } from '@shared/enums';
import { TAbstractSort } from '@shared/types';

export type TSortArticleFileTypes = TAbstractSort & {
  title?: SortEnum;
};
