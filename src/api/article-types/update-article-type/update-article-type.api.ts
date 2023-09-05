import { TEntityId, TGeneralResponse } from '@shared/types';
import { axios } from '@utils/axios.util';
import { AxiosResponse } from 'axios';
import { TUpdateArticleTypeRequest } from './types';

export function updateArticleTypeApi(
  articleTypeId: TEntityId,
  inputs: TUpdateArticleTypeRequest
) {
  return axios.put<
    TGeneralResponse,
    AxiosResponse<TGeneralResponse>,
    TUpdateArticleTypeRequest
  >(`/article-types/${articleTypeId}`, inputs);
}
