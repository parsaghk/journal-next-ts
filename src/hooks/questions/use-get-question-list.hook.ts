import { TGetQuestionListRequest } from '@api/questions';
import { getQuestionListApi } from '@api/questions/get-question-list/get-question-list.api';
import { useQuery } from '@tanstack/react-query';

export function useGetQuestionList(inputs: TGetQuestionListRequest) {
  return useQuery({
    queryKey: ['questions'],
    queryFn: () => getQuestionListApi(inputs),
    select: (response) => response.data,
  });
}
