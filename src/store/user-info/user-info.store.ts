import { RoleEnum } from '@shared/enums';
import { TUserSummary } from '@shared/types';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { TUserInfoStore } from './types';

export const useUserInfoStore = create<TUserInfoStore>()(
  devtools(
    persist(
      (set) => ({
        user: undefined,
        currentRole: undefined,
        setUserData: (data: TUserSummary) => set(() => ({ user: data })),
        setCurrentUserRole: (role: RoleEnum) =>
          set(() => ({ currentRole: role })),
        removeUserData: () => set(() => ({ user: undefined })),
      }),
      { name: 'user-info' }
    )
  )
);
