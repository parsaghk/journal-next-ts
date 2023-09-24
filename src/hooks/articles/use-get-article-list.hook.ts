import { getArticleListApi, TGetArticleListRequest } from '@api/articles';
import { useQuery } from '@tanstack/react-query';

export function useGetArticleList(inputs: TGetArticleListRequest) {
  return useQuery({
    queryKey: ['articles'],
    queryFn: () => getArticleListApi(inputs),
    select: (response) => response.data,
  });
}
