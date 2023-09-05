import { TGeneralEntityListRequest } from '@shared/types';
import { TFilterArticleCategories } from './filter-article-categories.type';
import { TSortArticleCategories } from './sort-article-categories.type';

export type TGetArticleCategoryListRequest = TGeneralEntityListRequest<
  TFilterArticleCategories,
  TSortArticleCategories
>;
