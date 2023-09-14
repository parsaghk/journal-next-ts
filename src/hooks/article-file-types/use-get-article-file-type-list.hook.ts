import { TGetArticleFileTypeListRequest } from '@api/article-file-types';
import { getArticleFileTypeListApi } from '@api/article-file-types/get-article-file-type-list/get-article-file-type-list.api';
import { useQuery } from '@tanstack/react-query';

export function useGetArticleFileTypeList(
  inputs: TGetArticleFileTypeListRequest
) {
  return useQuery({
    queryKey: ['article-file-types'],
    queryFn: () => getArticleFileTypeListApi(inputs),
    select: (response) => response.data,
  });
}
