import { TEntityId, TGeneralResponse } from '@shared/types';
import { axios } from '@utils/axios.util';
import { AxiosResponse } from 'axios';
import { TUpdateArticleRequest } from './types';

export function updateArticleApi(
  articleId: TEntityId,
  inputs: TUpdateArticleRequest
) {
  return axios.put<
    TGeneralResponse,
    AxiosResponse<TGeneralResponse>,
    TUpdateArticleRequest
  >(`/articles/${articleId}`, inputs);
}
