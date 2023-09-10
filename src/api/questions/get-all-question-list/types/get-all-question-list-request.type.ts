import { TGeneralAllEntityListRequest } from '@shared/types';
import { TFilterQuestions, TSortQuestions } from '../../get-question-list';

export type TGetAllQuestionListRequest = TGeneralAllEntityListRequest<
  TFilterQuestions,
  TSortQuestions
>;
