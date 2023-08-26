import {
  getStateListAndCountApi,
  TGetStateListAndCountRequest,
  TGetStateListResponse,
} from '@api/state';
import { TEntityListResponse, TPagination } from '@shared/types';
import { TGeneralErrorResponse } from '@shared/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export function useGetStateList(
  pagination?: TPagination,
  filters?: TGetStateListAndCountRequest['filters'],
  sorts?: TGetStateListAndCountRequest['sorts']
) {
  return useQuery<
    AxiosResponse<TEntityListResponse<TGetStateListResponse>>,
    AxiosError<TGeneralErrorResponse>,
    TEntityListResponse<TGetStateListResponse>
  >(
    ['states', pagination, filters, sorts],
    () => getStateListAndCountApi(pagination, filters, sorts),
    {
      enabled: false,
      select: (response) => response.data,
    }
  );
}
