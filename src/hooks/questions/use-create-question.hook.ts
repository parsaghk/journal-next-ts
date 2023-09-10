import { createQuestionApi } from '@api/questions';
import { useMutation } from '@tanstack/react-query';

export function useCreateQuestion() {
  return useMutation({
    mutationKey: ['create', 'questions'],
    mutationFn: createQuestionApi,
  });
}
