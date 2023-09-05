import { TGetArticleTypeListRequest } from '@api/article-types';
import { getArticleTypeListApi } from '@api/article-types/get-article-type-list/get-article-type-list.api';
import { useQuery } from '@tanstack/react-query';

export function useGetArticleTypeList(inputs: TGetArticleTypeListRequest) {
  return useQuery({
    queryKey: ['article-types'],
    queryFn: () => getArticleTypeListApi(inputs),
    select: (response) => response.data,
  });
}
