import { TArticleCategory } from '@api/article-categories';
import { TArticleType } from '@api/article-types';
import { ArticleStatusEnum } from '@shared/enums';
import { TAbstractEntity } from '@shared/types';
import { TArticleAuthorResponse } from './article-author-info-response.type';
import { TArticleFileResponse } from './article-file-response.type';
import { TArticleQuestionResponse } from './article-quesstion-response.dto';
import { TArticleStatusHistory } from './article-status-history.type';

export type TGetSingleArticleResponse = TAbstractEntity & {
  subject: string;
  shortDescription?: string;
  owner: TArticleAuthorResponse;
  type: TArticleType;
  category: TArticleCategory;
  status: ArticleStatusEnum;
  title: string;
  abstract: string;
  keywordList: string[];
  fileList: TArticleFileResponse[];
  questionList: TArticleQuestionResponse[];
  conflictOfInterest?: string;
  competingInterestStatement?: string;
  statusHistoryList: TArticleStatusHistory[];
};
