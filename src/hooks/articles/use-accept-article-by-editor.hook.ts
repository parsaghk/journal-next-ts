import { acceptArticleByEditorApi } from '@api/articles';
import { TEntityId } from '@shared/types';
import { useMutation } from '@tanstack/react-query';

export function useAcceptArticleByEditor(articleId: TEntityId) {
  return useMutation({
    mutationKey: ['article', 'accept', 'editor', articleId],
    mutationFn: () => acceptArticleByEditorApi(articleId),
  });
}
