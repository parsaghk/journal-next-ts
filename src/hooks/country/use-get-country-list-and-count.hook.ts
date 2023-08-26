import {
  getCountryListAndCountApi,
  TGetCountryListAndCountRequest,
  TGetCountryListResponse,
} from '@api/country';
import { TEntityListResponse, TPagination } from '@shared/types';
import { TGeneralErrorResponse } from '@shared/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export function useGetCountryListAndCount(
  pagination?: TPagination,
  filters?: TGetCountryListAndCountRequest['filters'],
  sorts?: TGetCountryListAndCountRequest['sorts']
) {
  return useQuery<
    AxiosResponse<TEntityListResponse<TGetCountryListResponse>>,
    AxiosError<TGeneralErrorResponse>,
    TEntityListResponse<TGetCountryListResponse>
  >({
    queryKey: ['countries'],
    queryFn: () => getCountryListAndCountApi(pagination, filters, sorts),
    enabled: false,
    select: (response) => response.data,
  });
}
