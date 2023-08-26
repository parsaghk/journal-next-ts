import { axios } from '@utils/axios.util';
import { TGetCountryListResponse } from '../get-country-list-and-count';
import { TGetAllCountryListRequest } from './types';

export function getAllCountryListApi(
  filters?: TGetAllCountryListRequest['filters'],
  sorts?: TGetAllCountryListRequest['sorts']
) {
  return axios.get<TGetCountryListResponse[]>('/countries/all', {
    params: {
      filters,
      sorts,
    } as TGetAllCountryListRequest,
  });
}
