import { getSingleUserApi } from '@api/users';
import { TEntityId } from '@shared/types';
import { useQuery } from '@tanstack/react-query';

export function useGetSingleUser(userId: TEntityId) {
  return useQuery({
    queryKey: ['users', userId],
    queryFn: () => getSingleUserApi(userId),
    select: (response) => response.data,
  });
}
