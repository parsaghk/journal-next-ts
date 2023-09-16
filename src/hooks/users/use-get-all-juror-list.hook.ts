import { getAllJurorListApi } from '@api/users';
import { useQuery } from '@tanstack/react-query';

export function useGetAllJurorList() {
  return useQuery({
    queryKey: ['users', 'jurors'],
    queryFn: () => getAllJurorListApi(),
    select: (response) => response.data,
  });
}
