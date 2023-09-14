import {
  TUpdateArticleFileTypeRequest,
  updateArticleFileTypeApi,
} from '@api/article-file-types';
import { TEntityId } from '@shared/types';
import { useMutation } from '@tanstack/react-query';

export function useUpdateArticleFileType(articleFileTypeId: TEntityId) {
  return useMutation({
    mutationKey: ['update', 'article-file-types'],
    mutationFn: (inputs: TUpdateArticleFileTypeRequest) =>
      updateArticleFileTypeApi(articleFileTypeId, inputs),
  });
}
