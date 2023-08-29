import { TUserSummary } from '@shared/types';

export type TUserInfoStore = {
  user?: TUserSummary;
  setUserData: (data: TUserSummary) => void;
};
