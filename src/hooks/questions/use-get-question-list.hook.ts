import { getQuestionListApi, TGetQuestionListRequest } from '@api/questions';
import { useQuery } from '@tanstack/react-query';

export function useGetQuestionList(inputs: TGetQuestionListRequest) {
  return useQuery({
    queryKey: ['questions'],
    queryFn: () => getQuestionListApi(inputs),
    select: (response) => response.data,
  });
}
