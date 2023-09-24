import { TUpdateArticleRequest, updateArticleApi } from '@api/articles';
import { TEntityId } from '@shared/types';
import { useMutation } from '@tanstack/react-query';

export function useUpdateArticle(articleId: TEntityId) {
  return useMutation({
    mutationKey: ['update', 'articles'],
    mutationFn: (inputs: TUpdateArticleRequest) =>
      updateArticleApi(articleId, inputs),
  });
}
