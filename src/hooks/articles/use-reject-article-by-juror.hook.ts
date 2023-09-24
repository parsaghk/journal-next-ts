import { rejectArticleByJurorApi, TRejectArticleByJuror } from '@api/articles';
import { TEntityId } from '@shared/types';
import { useMutation } from '@tanstack/react-query';

export function useRejectArticleByJuror(articleId: TEntityId) {
  return useMutation({
    mutationKey: ['article', 'reject', 'juror', articleId],
    mutationFn: (inputs: TRejectArticleByJuror) =>
      rejectArticleByJurorApi(articleId, inputs),
  });
}
