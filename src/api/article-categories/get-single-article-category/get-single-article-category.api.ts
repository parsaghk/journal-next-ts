import { TEntityId } from '@shared/types';
import { axios } from '@utils/axios.util';
import { TGetSingleArticleCategoryResponse } from './types';

export function getSingleArticleCategoryApi(articleCategoryId: TEntityId) {
  return axios.get<TGetSingleArticleCategoryResponse>(
    `/article-categories/${articleCategoryId}`
  );
}
