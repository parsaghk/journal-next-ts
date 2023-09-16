import { TEntityId } from '@shared/types';
import { axios } from '@utils/axios.util';
import { TGetSingleUserResponse } from './types';

export function getSingleUserApi(userId: TEntityId) {
  return axios.get<TGetSingleUserResponse>(`/users/${userId}`);
}
