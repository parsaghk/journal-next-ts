import { getAllArticleTypeListApi } from '@api/article-types';
import { useQuery } from '@tanstack/react-query';

export function useGetAllArticleTypeList() {
  return useQuery({
    queryKey: ['article-types', 'all'],
    queryFn: () => getAllArticleTypeListApi(),
    select: (response) => response.data,
  });
}
