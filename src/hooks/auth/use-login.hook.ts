import { loginApi } from '@api/auth';
import { useTokenStore } from '@store/use-token';
import { useUserInfoStore } from '@store/user-info';
import { useMutation } from '@tanstack/react-query';
import Router from 'next/router';

export function useLogin() {
  return useMutation({
    mutationKey: ['auth', 'login'],
    mutationFn: loginApi,
    onSuccess: ({ data }) => {
      useTokenStore.getState().setTokens(data.tokens);
      useUserInfoStore.getState().setUserData(data.user);
      useUserInfoStore.getState().setCurrentUserRole(data.user.roleList[0]);
      Router.push('/');
    },
  });
}
