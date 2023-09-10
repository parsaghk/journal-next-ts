import { getAllQuestionListApi } from '@api/questions';
import { TGetAllQuestionListRequest } from '@api/questions';
import { useQuery } from '@tanstack/react-query';

export function useGetAllQuestionList(inputs: TGetAllQuestionListRequest) {
  return useQuery({
    queryKey: ['questions', 'all'],
    queryFn: () => getAllQuestionListApi(inputs),
    select: (response) => response.data,
  });
}
