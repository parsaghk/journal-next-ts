import { TEntityListResponse, TPagination } from '@shared/types';
import { axios } from '@utils/axios.util';
import { TGetStateListAndCountRequest, TGetStateListResponse } from './types';

export function getStateListAndCountApi(
  pagination: TPagination = { pageIndex: 1, pageSize: 10 },
  filters?: TGetStateListAndCountRequest['filters'],
  sorts?: TGetStateListAndCountRequest['sorts']
) {
  return axios.get<TEntityListResponse<TGetStateListResponse>>('/states', {
    params: {
      pagination,
      filters,
      sorts,
    } as TGetStateListAndCountRequest,
  });
}
