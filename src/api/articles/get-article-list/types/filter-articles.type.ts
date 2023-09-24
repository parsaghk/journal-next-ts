import { TAbstractFilter } from '@shared/types';

export type TFilterArticles = TAbstractFilter & {
  title?: string;
};
