import { TEntityId } from '@shared/types';
import { axios } from '@utils/axios.util';
import { TGetSingleQuestionResponse } from './types';

export function getSingleQuestionApi(questionId: TEntityId) {
  return axios.get<TGetSingleQuestionResponse>(`/questions/${questionId}`);
}
