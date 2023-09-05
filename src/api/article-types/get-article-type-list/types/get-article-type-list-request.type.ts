import { TGeneralEntityListRequest } from '@shared/types';
import { TFilterArticleTypes } from './filter-article-types.type';
import { TSortArticleTypes } from './sort-article-types.type';

export type TGetArticleTypeListRequest = TGeneralEntityListRequest<
  TFilterArticleTypes,
  TSortArticleTypes
>;
