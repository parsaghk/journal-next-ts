import { TTokens } from '@shared/types';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { TTokenState } from './types';

export const useTokenStore = create<TTokenState>()(
  devtools(
    persist(
      (set) => ({
        accessToken: undefined,
        refreshToken: undefined,
        setTokens: (inputs: TTokens) => set(() => inputs),
        removeTokens: () =>
          set(() => ({ accessToken: undefined, refreshToken: undefined })),
      }),
      { name: 'token-storage' }
    )
  )
);
