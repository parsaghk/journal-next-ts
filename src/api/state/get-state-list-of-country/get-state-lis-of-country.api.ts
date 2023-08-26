import { TEntityId } from '@shared/types';
import { axios } from '@utils/axios.util';
import { TGetStateListResponse } from '../get-state-list-and-count';

export function getStateListOfCountryApi(countryId: TEntityId) {
  return axios.get<TGetStateListResponse[]>(`/states/countries/${countryId}`);
}
