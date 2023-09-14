import { createArticleFileTypeApi } from '@api/article-file-types';
import { useMutation } from '@tanstack/react-query';

export function useCreateArticleFileType() {
  return useMutation({
    mutationKey: ['create', 'article-file-types'],
    mutationFn: createArticleFileTypeApi,
  });
}
