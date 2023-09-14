import { TGeneralEntityListRequest } from '@shared/types';
import { TFilterArticleFileTypes } from './filter-article-file-types.type';
import { TSortArticleFileTypes } from './sort-article-file-types.type';

export type TGetArticleFileTypeListRequest = TGeneralEntityListRequest<
  TFilterArticleFileTypes,
  TSortArticleFileTypes
>;
