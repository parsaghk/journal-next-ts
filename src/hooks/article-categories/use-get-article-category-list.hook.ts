import { TGetArticleCategoryListRequest } from '@api/article-categories';
import { getArticleCategoryListApi } from '@api/article-categories/get-article-category-list/get-article-category-list.api';
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
