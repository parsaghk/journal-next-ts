import { TEntityListResponse } from '@shared/types';
import { axios } from '@utils/axios.util';
import { TArticleType, TGetArticleTypeListRequest } from './types';

export function getArticleTypeListApi(inputs: TGetArticleTypeListRequest) {
  return axios.get<TEntityListResponse<TArticleType>>('/article-types', {
    params: inputs,
  });
}
