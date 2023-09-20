import { RoleEnum } from '@shared/enums';

export type TUserSummary = {
  firstName: string;
  lastName: string;
  roleList: RoleEnum[];
};
