import Badge, { TBadgeProps } from '@components/Badge';
import { RoleConstant } from '@constants/role.constant';
import { RoleEnum } from '@shared/enums';
import { TRoleBadgeProps } from './types';

export default function RoleBadge({ role }: TRoleBadgeProps) {
  const roleToVariantMapper: Record<RoleEnum, TBadgeProps['color']> = {
    [RoleEnum.EDITOR]: 'purple',
    [RoleEnum.USER]: 'blue',
    [RoleEnum.MANAGER]: 'indigo',
    [RoleEnum.JUROR]: 'yellow',
  };
  return <Badge color={roleToVariantMapper[role]} text={RoleConstant(role)} />;
}
