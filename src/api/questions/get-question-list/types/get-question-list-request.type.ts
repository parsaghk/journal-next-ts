import { TGeneralEntityListRequest } from '@shared/types';
import { TFilterQuestions } from './filter-questions.type';
import { TSortQuestions } from './sort-questions.type';

export type TGetQuestionListRequest = TGeneralEntityListRequest<
  TFilterQuestions,
  TSortQuestions
>;
