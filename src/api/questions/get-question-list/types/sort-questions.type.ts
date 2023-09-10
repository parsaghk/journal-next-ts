import { SortEnum } from '@shared/enums';
import { TAbstractSort } from '@shared/types';

export type TSortQuestions = TAbstractSort & {
  content?: SortEnum;
  type?: SortEnum;
};
