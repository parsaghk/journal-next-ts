import { TEntityId, TGeneralResponse } from '@shared/types';
import { axios } from '@utils/axios.util';
import { AxiosResponse } from 'axios';
import { TRejectArticleByEditor } from './types';

export function rejectArticleByEditorApi(
  articleId: TEntityId,
  inputs: TRejectArticleByEditor
) {
  return axios.post<
    TGeneralResponse,
    AxiosResponse<TGeneralResponse>,
    TRejectArticleByEditor
  >(`/articles/${articleId}/editors/reject`, inputs);
}
