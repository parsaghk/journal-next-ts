import { createArticleTypeApi } from '@api/article-types';
import { useMutation } from '@tanstack/react-query';

export function useCreateArticleType() {
  return useMutation({
    mutationKey: ['create', 'article-types'],
    mutationFn: createArticleTypeApi,
  });
}
