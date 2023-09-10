import { axios } from '@utils/axios.util';

export function getAllArticleCategoryApi() {
  return axios.get('/article-categories/all');
}
