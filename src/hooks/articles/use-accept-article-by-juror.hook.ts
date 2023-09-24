import { acceptArticleByJurorApi } from '@api/articles';
import { TEntityId } from '@shared/types';
import { useMutation } from '@tanstack/react-query';

export function useAcceptArticleByJuror(articleId: TEntityId) {
  return useMutation({
    mutationKey: ['article', 'accept', 'juror', articleId],
    mutationFn: () => acceptArticleByJurorApi(articleId),
  });
}
