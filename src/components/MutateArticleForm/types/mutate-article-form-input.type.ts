import { TEntityId } from '@shared/types';
import { TUploadFileResponse } from '@shared/types';
import { UploadFile } from 'antd';

type TCustomUploadFile<T> = UploadFile<T> & {
  articleFileTypeId: TEntityId;
  description: string;
};

export type TMutateArticleFormInput = {
  title: string;
  abstract: string;
  articleCategoryId: TEntityId;
  articleTypeId: TEntityId;
  competingInterestStatement?: string;
  conflictOfInterest?: string;
  keywordList: string[];
  fundingAcknowledgement: boolean;
  fileList: TCustomUploadFile<TUploadFileResponse>[];
};
