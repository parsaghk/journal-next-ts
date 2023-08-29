import { axios } from '@utils/axios.util';
import { AxiosResponse } from 'axios';
import { TLoginRequest, TLoginResponse } from './types';

export function loginApi(inputs: TLoginRequest) {
  return axios.post<
    TLoginResponse,
    AxiosResponse<TLoginResponse>,
    TLoginRequest
  >('/auth/login', inputs);
}
