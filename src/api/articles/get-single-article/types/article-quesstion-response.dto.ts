import { TGetSingleQuestionResponse } from '@api/questions';
import { TAbstractEntity } from '@shared/types';

export type TArticleQuestionResponse = TAbstractEntity & {
  question: TGetSingleQuestionResponse;
  reply: string;
};
