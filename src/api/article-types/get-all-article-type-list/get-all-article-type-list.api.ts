import { axios } from '@utils/axios.util';

export function getAllArticleTypeListApi() {
  return axios.get('/article-types/all');
}
