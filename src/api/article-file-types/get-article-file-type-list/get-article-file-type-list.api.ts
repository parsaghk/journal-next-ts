import { TEntityListResponse } from '@shared/types';
import { axios } from '@utils/axios.util';
import {
  TGetArticleFileTypeListRequest,
  TGetArticleFileTypeListResponse,
} from './types';

export function getArticleFileTypeListApi(
  inputs: TGetArticleFileTypeListRequest
) {
  return axios.get<TEntityListResponse<TGetArticleFileTypeListResponse>>(
    '/article-file-types',
    {
      params: inputs,
    }
  );
}
