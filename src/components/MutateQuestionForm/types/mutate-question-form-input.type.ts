import { QuestionTypeEnum } from '@shared/enums';

export type TMutateQuestionFormInput = {
  content: string;
  type: QuestionTypeEnum;
};
