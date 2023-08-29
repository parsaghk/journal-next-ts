import { axios } from '@utils/axios.util';
import { AxiosResponse } from 'axios';
import { TRegisterRequest, TRegisterResponse } from './types';

export function registerApi(inputs: TRegisterRequest) {
  return axios.post<
    TRegisterResponse,
    AxiosResponse<TRegisterResponse>,
    TRegisterRequest
  >('/auth/register', inputs);
}
