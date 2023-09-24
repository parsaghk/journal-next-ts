import { ArticleStatusEnum, RoleEnum } from '@shared/enums';
import { TAbstractEntity, TUserSummary } from '@shared/types';

export type TArticleStatusHistory = TAbstractEntity & {
  status: ArticleStatusEnum;
  role: RoleEnum;
  affectedBy: TUserSummary;
};
