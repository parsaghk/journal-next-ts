import { getSingleArticleApi } from '@api/articles';
import { TEntityId } from '@shared/types';
import { useQuery } from '@tanstack/react-query';

export function useGetSingleArticle(articleId: TEntityId) {
  return useQuery({
    queryKey: ['articles', articleId],
    queryFn: () => getSingleArticleApi(articleId),
    select: (response) => response.data,
  });
}
