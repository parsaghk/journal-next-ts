import { TEntityId, TGeneralResponse } from '@shared/types';
import { axios } from '@utils/axios.util';
import { AxiosResponse } from 'axios';
import { TProcessArticleRequest } from './types';

export function processArticleApi(
  articleId: TEntityId,
  inputs: TProcessArticleRequest
) {
  return axios.post<
    TGeneralResponse,
    AxiosResponse<TGeneralResponse>,
    TProcessArticleRequest
  >(`/articles/${articleId}/process`, inputs);
}
