import { getSingleQuestionApi } from '@api/questions';
import { TEntityId } from '@shared/types';
import { useQuery } from '@tanstack/react-query';

export function useGetSingleQuestion(questionId: TEntityId) {
  return useQuery({
    queryKey: ['questions', questionId],
    queryFn: () => getSingleQuestionApi(questionId),
    select: (response) => response.data,
  });
}
