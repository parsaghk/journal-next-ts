import { TGeneralResponse } from '@shared/types';
import { axios } from '@utils/axios.util';
import { AxiosResponse } from 'axios';
import { TCreateArticleCategoryRequest } from './types';

export function createArticleCategoryApi(
  inputs: TCreateArticleCategoryRequest
) {
  return axios.post<
    TGeneralResponse,
    AxiosResponse<TGeneralResponse>,
    TCreateArticleCategoryRequest
  >('/article-categories', inputs);
}
