import { TGeneralResponse } from '@shared/types';
import { axios } from '@utils/axios.util';
import { AxiosResponse } from 'axios';
import { TCreateArticleTypeRequest } from './types';

export function createArticleTypeApi(inputs: TCreateArticleTypeRequest) {
  return axios.post<
    TGeneralResponse,
    AxiosResponse<TGeneralResponse>,
    TCreateArticleTypeRequest
  >('/article-types', inputs);
}
