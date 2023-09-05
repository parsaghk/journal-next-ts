import { getSingleArticleTypeApi } from '@api/article-types';
import { TEntityId } from '@shared/types';
import { useQuery } from '@tanstack/react-query';

export function useGetSingleArticleType(articleTypeId: TEntityId) {
  return useQuery({
    queryKey: ['article-types', articleTypeId],
    queryFn: () => getSingleArticleTypeApi(articleTypeId),
    select: (response) => response.data,
  });
}
