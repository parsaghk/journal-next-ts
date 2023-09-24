import {
  rejectArticleByEditorApi,
  TRejectArticleByEditor,
} from '@api/articles';
import { TEntityId } from '@shared/types';
import { useMutation } from '@tanstack/react-query';

export function useRejectArticleByEditor(articleId: TEntityId) {
  return useMutation({
    mutationKey: ['article', 'reject', 'editor', articleId],
    mutationFn: (inputs: TRejectArticleByEditor) =>
      rejectArticleByEditorApi(articleId, inputs),
  });
}
