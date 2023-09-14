import {
  getAllArticleFileTypeListApi,
  TFilterArticleFileTypes,
  TSortArticleFileTypes,
} from '@api/article-file-types';
import { TGeneralAllEntityListRequest } from '@shared/types';
import { useQuery } from '@tanstack/react-query';

export function useGetAllArticleFileTypeList(
  query?: TGeneralAllEntityListRequest<
    TFilterArticleFileTypes,
    TSortArticleFileTypes
  >
) {
  return useQuery({
    queryKey: ['article-file-types', 'all'],
    queryFn: () => getAllArticleFileTypeListApi(query),
    select: (response) => response.data,
  });
}
