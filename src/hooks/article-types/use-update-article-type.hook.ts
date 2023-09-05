import {
  TUpdateArticleTypeRequest,
  updateArticleTypeApi,
} from '@api/article-types';
import { TEntityId } from '@shared/types';
import { useMutation } from '@tanstack/react-query';

export function useUpdateArticleType(articleTypeId: TEntityId) {
  return useMutation({
    mutationKey: ['update', 'article-types'],
    mutationFn: (inputs: TUpdateArticleTypeRequest) =>
      updateArticleTypeApi(articleTypeId, inputs),
  });
}
