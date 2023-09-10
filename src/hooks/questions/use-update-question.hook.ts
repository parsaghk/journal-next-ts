import { TUpdateQuestionRequest, updateQuestionApi } from '@api/questions';
import { TEntityId } from '@shared/types';
import { useMutation } from '@tanstack/react-query';

export function useUpdateQuestion(questionId: TEntityId) {
  return useMutation({
    mutationKey: ['update', 'questions'],
    mutationFn: (inputs: TUpdateQuestionRequest) =>
      updateQuestionApi(questionId, inputs),
  });
}
