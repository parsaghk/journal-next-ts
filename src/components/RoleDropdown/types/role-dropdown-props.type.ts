import { RoleEnum } from '@shared/enums';

export type TRoleDropdownProps = {
  activeRole: RoleEnum;
  userRoleList: RoleEnum[];
  onClickDropdownItem: (role: RoleEnum) => void;
};
