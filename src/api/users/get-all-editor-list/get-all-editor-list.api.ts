import { TGetUserListResponse } from '@api/users';
import { axios } from '@utils/axios.util';

export function getAllEditorListApi() {
  return axios.get<TGetUserListResponse[]>('/users/editors');
}
