import { TEntityListResponse } from '@shared/types';
import { axios } from '@utils/axios.util';
import { TGetArticleListRequest, TGetArticleListResponse } from './types';

export function getArticleListApi(inputs: TGetArticleListRequest) {
  return axios.get<TEntityListResponse<TGetArticleListResponse>>('/articles', {
    params: inputs,
  });
}
