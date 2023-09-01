import { TUserSummary } from '@shared/types';

export type TNavbar = {
  userSummary?: TUserSummary;
  onLogout: () => void;
};
