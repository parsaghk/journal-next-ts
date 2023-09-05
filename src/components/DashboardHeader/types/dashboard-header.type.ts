import { TUserSummary } from '@shared/types';

export type TDashboardHeader = {
  userSummary?: TUserSummary;
  onLogoutButtonClick: () => void;
};
