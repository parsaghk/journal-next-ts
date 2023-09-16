import { axios } from '@utils/axios.util';
import { TArticleCategory } from '../get-article-category-list';

export function getAllArticleCategoryApi() {
  return axios.get<TArticleCategory[]>('/article-categories/all');
}
