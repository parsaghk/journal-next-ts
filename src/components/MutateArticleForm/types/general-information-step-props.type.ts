import { TArticleCategory } from '@api/article-categories';
import { TArticleType } from '@api/article-types';
import { FormInstance } from 'antd';
import { TMutateArticleFormInput } from './mutate-article-form-input.type';

export type TGeneralInformationStepProps = {
  articleTypeList: TArticleType[];
  articleCategoryList: TArticleCategory[];
  form: FormInstance<TMutateArticleFormInput>;
};
