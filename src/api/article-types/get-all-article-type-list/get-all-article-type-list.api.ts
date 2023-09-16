import { axios } from '@utils/axios.util';
import { TArticleType } from '../get-article-type-list';

export function getAllArticleTypeListApi() {
  return axios.get<TArticleType[]>('/article-types/all');
}
