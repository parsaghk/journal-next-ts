import { RoleEnum } from '@shared/enums';
import { TUserSummary } from '@shared/types';

export type TDashboardHeader = {
  userSummary?: TUserSummary;
  currentRole: RoleEnum;
  roleDropdownOnClick: (role: RoleEnum) => void;
  onLogoutButtonClick: () => void;
};
