import { TEntityListResponse, TPagination } from '@shared/types';
import { axios } from '@utils/axios.util';
import {
  TGetCountryListAndCountRequest,
  TGetCountryListResponse,
} from './types';

export function getCountryListAndCountApi(
  pagination: TPagination = { pageIndex: 1, pageSize: 10 },
  filters?: TGetCountryListAndCountRequest['filters'],
  sorts?: TGetCountryListAndCountRequest['sorts']
) {
  return axios.get<TEntityListResponse<TGetCountryListResponse>>('/countries', {
    params: {
      pagination,
      filters,
      sorts,
    } as TGetCountryListAndCountRequest,
  });
}
