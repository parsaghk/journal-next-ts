import { useTokenStore } from '@store/use-token';
import Axios from 'axios';

const { accessToken } = useTokenStore.getState();

export const axios = Axios.create({
  baseURL: '/api',
  headers: {
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
  },
});
