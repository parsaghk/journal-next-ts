import { getAllArticleCategoryApi } from '@api/article-categories/get-all-article-category-list';
import { useQuery } from '@tanstack/react-query';

export function useGetAllArticleCategoryList() {
  return useQuery({
    queryKey: ['article-categories', 'all'],
    queryFn: () => getAllArticleCategoryApi(),
    select: (response) => response.data,
  });
}
