import { RoleEnum, UserStatusEnum } from '@shared/enums';
import { TAbstractEntity } from '@shared/types';

export type TGetUserListResponse = TAbstractEntity & {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  status: UserStatusEnum;
  roleList: RoleEnum[];
};
