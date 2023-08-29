import { registerApi } from '@api/auth';
import { useTokenStore } from '@store/use-token';
import { useUserInfoStore } from '@store/user-info';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import Router from 'next/router';
import { i18n } from 'next-i18next';

export function useRegister() {
  return useMutation({
    mutationKey: ['auth', 'register'],
    mutationFn: registerApi,
    onSuccess: ({ data }) => {
      useTokenStore.getState().setTokens(data.tokens);
      useUserInfoStore.getState().setUserData(data.user);
      Router.push('/');
      notification.open({
        type: 'success',
        placement: 'bottomRight',
        message: i18n?.t('register.success'),
      });
    },
  });
}
