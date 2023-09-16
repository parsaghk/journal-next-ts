import {
  getArticleFileTypeListApi,
  TGetArticleFileTypeListRequest,
} from '@api/article-file-types';
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
