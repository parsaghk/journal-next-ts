import { RoleEnum, UserStatusEnum } from '@shared/enums';
import { TAbstractEntity } from '@shared/types';

export type TGetSingleUserResponse = TAbstractEntity & {
  firstName: string;
  middleName?: string;
  lastName: string;
  username: string;
  email: string;
  status: UserStatusEnum;
  position?: string;
  institution?: string;
  department?: string;
  address?: string;
  postalCode?: string;
  roleList: RoleEnum[];
};
