import { TGeneralResponse } from '@shared/types';
import { axios } from '@utils/axios.util';
import { AxiosResponse } from 'axios';
import { TCreateArticleRequest } from './types';

export function createArticleApi(inputs: TCreateArticleRequest) {
  return axios.post<
    TGeneralResponse,
    AxiosResponse<TGeneralResponse>,
    TCreateArticleRequest
  >('/articles', inputs);
}
