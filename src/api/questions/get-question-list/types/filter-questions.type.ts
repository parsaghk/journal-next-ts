import { QuestionTypeEnum } from '@shared/enums';
import { TAbstractFilter } from '@shared/types';

export type TFilterQuestions = TAbstractFilter & {
  content?: string;
  type?: QuestionTypeEnum;
};
