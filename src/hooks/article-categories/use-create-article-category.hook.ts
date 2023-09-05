import { createArticleCategoryApi } from '@api/article-categories';
import { useMutation } from '@tanstack/react-query';

export function useCreateArticleCategory() {
  return useMutation({
    mutationKey: ['create', 'article-categories'],
    mutationFn: createArticleCategoryApi,
  });
}
