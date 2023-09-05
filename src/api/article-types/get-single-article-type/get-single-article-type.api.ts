import { TEntityId } from '@shared/types';
import { axios } from '@utils/axios.util';
import { TGetSingleArticleTypeResponse } from './types';

export function getSingleArticleTypeApi(articleTypeId: TEntityId) {
  return axios.get<TGetSingleArticleTypeResponse>(
    `/article-types/${articleTypeId}`
  );
}
