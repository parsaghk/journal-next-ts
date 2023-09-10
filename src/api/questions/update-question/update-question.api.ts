import { TEntityId, TGeneralResponse } from '@shared/types';
import { axios } from '@utils/axios.util';
import { AxiosResponse } from 'axios';
import { TUpdateQuestionRequest } from './types';

export function updateQuestionApi(
  questionId: TEntityId,
  inputs: TUpdateQuestionRequest
) {
  return axios.put<
    TGeneralResponse,
    AxiosResponse<TGeneralResponse>,
    TUpdateQuestionRequest
  >(`/questions/${questionId}`, inputs);
}
