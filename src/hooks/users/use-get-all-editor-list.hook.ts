import { getAllEditorListApi } from '@api/users';
import { useQuery } from '@tanstack/react-query';

export function useGetAllEditorList() {
  return useQuery({
    queryKey: ['users', 'editors'],
    queryFn: () => getAllEditorListApi(),
    select: (response) => response.data,
  });
}
