import { getSingleArticleFileTypeApi } from '@api/article-file-types';
import { TEntityId } from '@shared/types';
import { useQuery } from '@tanstack/react-query';

export function useGetSingleArticleFileType(articleFileTypeId: TEntityId) {
  return useQuery({
    queryKey: ['article-file-types', articleFileTypeId],
    queryFn: () => getSingleArticleFileTypeApi(articleFileTypeId),
    select: (response) => response.data,
  });
}
