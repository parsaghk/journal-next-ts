import { TEntityId } from '@shared/types';

export type TCreateArticleRequest = {
  articleTypeId: TEntityId;
  articleCategoryId: TEntityId;
  fileList: { description?: string; typeId: TEntityId; storageId: TEntityId }[];
  conflictOfInterest?: string;
  competingInterestStatement?: string;
  title: string;
  abstract: string;
  keywordList: string[];
};
