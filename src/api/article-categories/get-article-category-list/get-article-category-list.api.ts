import { TEntityListResponse } from '@shared/types';
import { axios } from '@utils/axios.util';
import { TArticleCategory, TGetArticleCategoryListRequest } from './types';

export function getArticleCategoryListApi(
  inputs: TGetArticleCategoryListRequest
) {
  return axios.get<TEntityListResponse<TArticleCategory>>(
    '/article-categories',
    {
      params: inputs,
    }
  );
}
