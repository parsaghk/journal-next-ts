import { TEntityId, TGeneralResponse } from '@shared/types';
import { axios } from '@utils/axios.util';
import { AxiosResponse } from 'axios';
import { TUpdateArticleCategoryRequest } from './types';

export function updateArticleCategoryApi(
  articleCategoryId: TEntityId,
  inputs: TUpdateArticleCategoryRequest
) {
  return axios.put<
    TGeneralResponse,
    AxiosResponse<TGeneralResponse>,
    TUpdateArticleCategoryRequest
  >(`/article-categories/${articleCategoryId}`, inputs);
}
