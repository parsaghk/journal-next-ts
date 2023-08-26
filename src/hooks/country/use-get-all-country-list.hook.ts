import {
  getAllCountryListApi,
  TGetAllCountryListRequest,
  TGetCountryListResponse,
} from '@api/country';
import { TGeneralErrorResponse } from '@shared/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export function useGetAllCountryList(
  filters?: TGetAllCountryListRequest['filters'],
  sorts?: TGetAllCountryListRequest['sorts']
) {
  return useQuery<
    AxiosResponse<TGetCountryListResponse[]>,
    AxiosError<TGeneralErrorResponse>,
    TGetCountryListResponse[]
  >({
    queryKey: ['countries-all'],
    queryFn: () => getAllCountryListApi(filters, sorts),
    enabled: false,
    select: (response) => response.data,
  });
}
