import { TEntityListResponse } from '@shared/types';
import { axios } from '@utils/axios.util';
import { TGetQuestionListRequest, TGetQuestionListResponse } from './types';

export function getQuestionListApi(inputs: TGetQuestionListRequest) {
  return axios.get<TEntityListResponse<TGetQuestionListResponse>>(
    '/questions',
    {
      params: inputs,
    }
  );
}
