import { RoleEnum } from '@shared/enums';
import { i18n } from 'next-i18next';

export const RoleConstant = (role: RoleEnum) => {
  const roleToTranslationMapper: Record<RoleEnum, string> = {
    [RoleEnum.EDITOR]: i18n?.t('constants.role.editor') as string,
    [RoleEnum.JUROR]: i18n?.t('constants.role.juror') as string,
    [RoleEnum.MANAGER]: i18n?.t('constants.role.manager') as string,
    [RoleEnum.USER]: i18n?.t('constants.role.user') as string,
  };
  return roleToTranslationMapper[role];
};
