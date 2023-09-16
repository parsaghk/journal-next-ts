import { TEntityListResponse } from '@shared/types';
import { axios } from '@utils/axios.util';
import { TGetUserListRequest, TGetUserListResponse } from './types';

export function getUserListApi(inputs: TGetUserListRequest) {
  return axios.get<TEntityListResponse<TGetUserListResponse>>('/users', {
    params: inputs,
  });
}
