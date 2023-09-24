import { TGeneralEntityListRequest } from '@shared/types';
import { TFilterArticles } from './filter-articles.type';
import { TSortArticles } from './sort-articles.type';

export type TGetArticleListRequest = TGeneralEntityListRequest<
  TFilterArticles,
  TSortArticles
>;
