import {
  getArticleTypeListApi,
  TGetArticleTypeListRequest,
} from '@api/article-types';
import { useQuery } from '@tanstack/react-query';

export function useGetArticleTypeList(inputs: TGetArticleTypeListRequest) {
  return useQuery({
    queryKey: ['article-types'],
    queryFn: () => getArticleTypeListApi(inputs),
    select: (response) => response.data,
  });
}
