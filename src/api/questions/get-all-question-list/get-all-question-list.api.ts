import { TGetQuestionListResponse } from '@api/questions';
import { axios } from '@utils/axios.util';
import { TGetAllQuestionListRequest } from './types';

export function getAllQuestionListApi(inputs: TGetAllQuestionListRequest) {
  return axios.get<TGetQuestionListResponse[]>('/questions/all', {
    params: inputs,
  });
}
