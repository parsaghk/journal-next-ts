import { RoleEnum } from '@shared/enums';
import { TUserSummary } from '@shared/types';

export type TUserInfoStore = {
  user?: TUserSummary;
  currentRole?: RoleEnum;
  setUserData: (data: TUserSummary) => void;
  setCurrentUserRole: (role: RoleEnum) => void;
  removeUserData: () => void;
};
