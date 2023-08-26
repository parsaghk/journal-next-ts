import { TEntityId } from '@shared/types';
import { axios } from '@utils/axios.util';
import { TGetCityListResponse } from '../get-city-list-and-count';

export function getCityListOfStateApi(stateId: TEntityId) {
  return axios.get<TGetCityListResponse[]>(`/cities/states/${stateId}`);
}
