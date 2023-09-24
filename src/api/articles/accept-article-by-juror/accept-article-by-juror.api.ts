import { TEntityId, TGeneralResponse } from '@shared/types';
import { axios } from '@utils/axios.util';
import { AxiosResponse } from 'axios';

export function acceptArticleByJurorApi(articleId: TEntityId) {
  return axios.post<TGeneralResponse, AxiosResponse<TGeneralResponse>>(
    `/articles/${articleId}/jurors/accept`
  );
}
