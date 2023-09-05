import {
  TUpdateArticleCategoryRequest,
  updateArticleCategoryApi,
} from '@api/article-categories';
import { TEntityId } from '@shared/types';
import { useMutation } from '@tanstack/react-query';

export function useUpdateArticleCategory(articleCategoryId: TEntityId) {
  return useMutation({
    mutationKey: ['update', 'article-categories'],
    mutationFn: (inputs: TUpdateArticleCategoryRequest) =>
      updateArticleCategoryApi(articleCategoryId, inputs),
  });
}
