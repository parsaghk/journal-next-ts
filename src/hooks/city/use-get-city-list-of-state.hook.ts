import { getCityListOfStateApi, TGetCityListResponse } from '@api/city';
import { TEntityId, TGeneralErrorResponse } from '@shared/types';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export function useGetCityListOfState(
  stateId: TEntityId,
  options?: UseQueryOptions<
    AxiosResponse<TGetCityListResponse[]>,
    AxiosError<TGeneralErrorResponse>,
    TGetCityListResponse[]
  >
) {
  return useQuery<
    AxiosResponse<TGetCityListResponse[]>,
    AxiosError<TGeneralErrorResponse>,
    TGetCityListResponse[]
  >({
    queryKey: ['cities', 'states', stateId],
    queryFn: () => getCityListOfStateApi(stateId),
    select: (response) => response.data,
    ...options,
  });
}
