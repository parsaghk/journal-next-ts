import {
  getCityListAndCountApi,
  TGetCityListAndCountRequest,
  TGetCityListResponse,
} from '@api/city';
import { TEntityListResponse, TPagination } from '@shared/types';
import { TGeneralErrorResponse } from '@shared/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export function useGetCityList(
  pagination?: TPagination,
  filters?: TGetCityListAndCountRequest['filters'],
  sorts?: TGetCityListAndCountRequest['sorts']
) {
  return useQuery<
    AxiosResponse<TEntityListResponse<TGetCityListResponse>>,
    AxiosError<TGeneralErrorResponse>,
    TEntityListResponse<TGetCityListResponse>
  >(['cities'], () => getCityListAndCountApi(pagination, filters, sorts), {
    enabled: false,
    select: (response) => response.data,
  });
}
