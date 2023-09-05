import { getSingleArticleCategoryApi } from '@api/article-categories';
import { TEntityId } from '@shared/types';
import { useQuery } from '@tanstack/react-query';

export function useGetSingleArticleCategory(articleCategoryId: TEntityId) {
  return useQuery({
    queryKey: ['article-categories', articleCategoryId],
    queryFn: () => getSingleArticleCategoryApi(articleCategoryId),
    select: (response) => response.data,
  });
}
