import { TEntityId, TGeneralResponse } from '@shared/types';
import { axios } from '@utils/axios.util';

export function publishArticle(articleId: TEntityId) {
  return axios.post<TGeneralResponse>(`/articles/${articleId}/publish`);
}
