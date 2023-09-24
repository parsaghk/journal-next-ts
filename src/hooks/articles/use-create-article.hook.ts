import { createArticleApi } from '@api/articles';
import { useMutation } from '@tanstack/react-query';

export function useCreateArticle() {
  return useMutation({
    mutationKey: ['create', 'articles'],
    mutationFn: createArticleApi,
  });
}
