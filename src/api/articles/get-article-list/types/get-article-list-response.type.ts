import { ArticleStatusEnum } from '@shared/enums';
import { TAbstractEntity, TUserSummary } from '@shared/types';

export type TGetArticleListResponse = TAbstractEntity & {
  subject: string;
  shortDescription: string;
  status: ArticleStatusEnum;
  owner: TUserSummary;
};
