import { QuestionTypeEnum } from '@shared/enums';

export type TCreateQuestionRequest = {
  content: string;
  type: QuestionTypeEnum;
};
