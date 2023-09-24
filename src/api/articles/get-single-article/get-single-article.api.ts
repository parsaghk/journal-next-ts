import { TEntityId } from '@shared/types';
import { axios } from '@utils/axios.util';
import { TGetSingleArticleResponse } from './types';

export function getSingleArticleApi(articleId: TEntityId) {
  return axios.get<TGetSingleArticleResponse>(`/articles/${articleId}`);
}
