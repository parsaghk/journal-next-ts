import { processArticleApi, TProcessArticleRequest } from '@api/articles';
import { TEntityId } from '@shared/types';
import { useMutation } from '@tanstack/react-query';

export function useProcessArticle(articleId: TEntityId) {
  return useMutation({
    mutationKey: ['articles', 'process', articleId],
    mutationFn: (inputs: TProcessArticleRequest) =>
      processArticleApi(articleId, inputs),
  });
}
