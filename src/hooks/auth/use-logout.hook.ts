import { logoutApi } from '@api/auth';
import { useTokenStore } from '@store/use-token';
import { useUserInfoStore } from '@store/user-info';
import { useMutation } from '@tanstack/react-query';
import Router from 'next/router';

export function useLogout() {
  return useMutation({
    mutationKey: ['logout'],
    mutationFn: () => logoutApi(),
    onSuccess: () => {
      useUserInfoStore.getState().removeUserData();
      useTokenStore.getState().removeTokens();
      Router.push('/');
    },
  });
}
