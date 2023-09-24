import { TGetSingleArticleFileTypeResponse } from '@api/article-file-types';
import { TAbstractEntity } from '@shared/types';
import { TStorage } from './storage.type';

export type TArticleFileResponse = TAbstractEntity & {
  description: string;
  type: TGetSingleArticleFileTypeResponse;
  storage: TStorage;
};
