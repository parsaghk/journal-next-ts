import { getUserListApi, TGetUserListRequest } from '@api/users';
import { useQuery } from '@tanstack/react-query';

export function useGetUserList(inputs: TGetUserListRequest) {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => getUserListApi(inputs),
    select: (response) => response.data,
  });
}
