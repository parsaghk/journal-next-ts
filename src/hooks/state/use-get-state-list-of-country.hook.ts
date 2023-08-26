import { getStateListOfCountryApi, TGetStateListResponse } from '@api/state';
import { TEntityId, TGeneralErrorResponse } from '@shared/types';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export function useGetStateListOfCountry(
  countryId: TEntityId,
  options?: UseQueryOptions<
    AxiosResponse<TGetStateListResponse[]>,
    AxiosError<TGeneralErrorResponse>,
    TGetStateListResponse[]
  >
) {
  return useQuery<
    AxiosResponse<TGetStateListResponse[]>,
    AxiosError<TGeneralErrorResponse>,
    TGetStateListResponse[]
  >({
    queryKey: ['states', 'countries', countryId],
    queryFn: () => getStateListOfCountryApi(countryId),
    select: (response) => response.data,
    ...options,
  });
}
