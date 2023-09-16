import {
  getArticleCategoryListApi,
  TGetArticleCategoryListRequest,
} from '@api/article-categories';
import { useQuery } from '@tanstack/react-query';

export function useGetArticleCategoryList(
  inputs: TGetArticleCategoryListRequest
) {
  return useQuery({
    queryKey: ['article-categories'],
    queryFn: () => getArticleCategoryListApi(inputs),
    select: (response) => response.data,
  });
}
