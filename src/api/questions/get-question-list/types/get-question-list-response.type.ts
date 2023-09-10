import { QuestionTypeEnum } from '@shared/enums';
import { TAbstractEntity } from '@shared/types';

export type TGetQuestionListResponse = TAbstractEntity & {
  content: string;
  type: QuestionTypeEnum;
};
