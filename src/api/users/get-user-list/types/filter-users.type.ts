import { RoleEnum, UserStatusEnum } from '@shared/enums';
import { TAbstractFilter } from '@shared/types';

export type TFilterUsers = TAbstractFilter & {
  roleList?: RoleEnum[];
  status?: UserStatusEnum;
};
