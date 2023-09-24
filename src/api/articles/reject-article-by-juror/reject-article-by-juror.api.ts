import { TEntityId, TGeneralResponse } from '@shared/types';
import { axios } from '@utils/axios.util';
import { AxiosResponse } from 'axios';
import { TRejectArticleByJuror } from './types';

export function rejectArticleByJurorApi(
  articleId: TEntityId,
  inputs: TRejectArticleByJuror
) {
  return axios.post<
    TGeneralResponse,
    AxiosResponse<TGeneralResponse>,
    TRejectArticleByJuror
  >(`/articles/${articleId}/jurors/reject`, inputs);
}
