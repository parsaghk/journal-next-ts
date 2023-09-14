import { TEntityId } from '@shared/types';
import { axios } from '@utils/axios.util';
import { TGetSingleArticleFileTypeResponse } from './types';

export function getSingleArticleFileTypeApi(articleFileTypeId: TEntityId) {
  return axios.get<TGetSingleArticleFileTypeResponse>(
    `/article-file-types/${articleFileTypeId}`
  );
}
