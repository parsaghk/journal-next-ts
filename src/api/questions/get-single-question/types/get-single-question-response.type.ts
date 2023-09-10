import { QuestionTypeEnum } from '@shared/enums';
import { TAbstractEntity } from '@shared/types';

export type TGetSingleQuestionResponse = TAbstractEntity & {
  content: string;
  type: QuestionTypeEnum;
};
