import { TGeneralAllEntityListRequest } from '@shared/types';
import { axios } from '@utils/axios.util';
import {
  TFilterArticleFileTypes,
  TGetArticleFileTypeListResponse,
  TSortArticleFileTypes,
} from '../get-article-file-type-list';

export function getAllArticleFileTypeListApi(
  query?: TGeneralAllEntityListRequest<
    TFilterArticleFileTypes,
    TSortArticleFileTypes
  >
) {
  return axios.get<TGetArticleFileTypeListResponse[]>(
    '/article-file-types/all',
    {
      params: query,
    }
  );
}
