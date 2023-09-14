import { TGeneralResponse } from '@shared/types';
import { axios } from '@utils/axios.util';
import { AxiosResponse } from 'axios';
import { TCreateArticleFileTypeRequest } from './types';

export function createArticleFileTypeApi(
  inputs: TCreateArticleFileTypeRequest
) {
  return axios.post<
    TGeneralResponse,
    AxiosResponse<TGeneralResponse>,
    TCreateArticleFileTypeRequest
  >('/article-file-types', inputs);
}
