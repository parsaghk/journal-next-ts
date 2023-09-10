import { TGeneralResponse } from '@shared/types';
import { axios } from '@utils/axios.util';
import { AxiosResponse } from 'axios';
import { TCreateQuestionRequest } from './types';

export function createQuestionApi(inputs: TCreateQuestionRequest) {
  return axios.post<
    TGeneralResponse,
    AxiosResponse<TGeneralResponse>,
    TCreateQuestionRequest
  >('/questions', inputs);
}
