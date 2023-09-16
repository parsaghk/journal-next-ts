import { TGetUserListResponse } from '@api/users';
import { axios } from '@utils/axios.util';

export function getAllJurorListApi() {
  return axios.get<TGetUserListResponse[]>('/users/jurors', {});
}
