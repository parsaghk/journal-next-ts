import { useTokenStore } from '@store/use-token';
import Axios from 'axios';

export const axios = Axios.create({
  baseURL: '/api',
});

axios.interceptors.request.use((req) => {
  if (!req.headers.Authorization) {
    const { accessToken } = useTokenStore.getState();
    req.headers.Authorization = `Bearer ${accessToken}`;
  }
  return req;
});
