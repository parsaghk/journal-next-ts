import { TEntityListResponse, TPagination } from '@shared/types';
import { axios } from '@utils/axios.util';
import { TGetCityListAndCountRequest, TGetCityListResponse } from './types';

export function getCityListAndCountApi(
  pagination: TPagination = { pageIndex: 1, pageSize: 10 },
  filters?: TGetCityListAndCountRequest['filters'],
  sorts?: TGetCityListAndCountRequest['sorts']
) {
  return axios.get<TEntityListResponse<TGetCityListResponse>>('/cities', {
    params: {
      pagination,
      filters,
      sorts,
    } as TGetCityListAndCountRequest,
  });
}
