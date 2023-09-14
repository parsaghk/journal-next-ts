import { TEntityId, TGeneralResponse } from '@shared/types';
import { axios } from '@utils/axios.util';
import { AxiosResponse } from 'axios';
import { TUpdateArticleFileTypeRequest } from './types';

export function updateArticleFileTypeApi(
  articleFileTypeId: TEntityId,
  inputs: TUpdateArticleFileTypeRequest
) {
  return axios.put<
    TGeneralResponse,
    AxiosResponse<TGeneralResponse>,
    TUpdateArticleFileTypeRequest
  >(`/article-file-types/${articleFileTypeId}`, inputs);
}
