import { TGeneralResponse } from '@shared/types';
import { useTokenStore } from '@store/use-token';
import { axios } from '@utils/axios.util';
import { AxiosResponse } from 'axios';
import { TLogoutRequest } from './types';

export function logoutApi() {
  const { accessToken, refreshToken } = useTokenStore.getState();
  return axios.post<
    TGeneralResponse,
    AxiosResponse<TGeneralResponse>,
    TLogoutRequest
  >(
    '/auth/logout',
    { accessToken: accessToken as string },
    {
      headers: {
        Authorization: `Bearer ${refreshToken as string}`,
      },
    }
  );
}
