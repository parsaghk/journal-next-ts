import { publishArticle } from '@api/articles';
import { TEntityId } from '@shared/types';
import { useMutation } from '@tanstack/react-query';

export function usePublishArticle(articleId: TEntityId) {
  return useMutation({
    mutationKey: ['articles', 'publish', articleId],
    mutationFn: () => publishArticle(articleId),
  });
}
