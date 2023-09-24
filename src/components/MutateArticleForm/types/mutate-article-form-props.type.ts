import { TArticleCategory } from '@api/article-categories';
import { TGetArticleFileTypeListResponse } from '@api/article-file-types';
import { TArticleType } from '@api/article-types';
import { TGetQuestionListResponse } from '@api/questions';
import { TGeneralMutateFormProps } from '@shared/types';
import { TMutateArticleFormInput } from './mutate-article-form-input.type';

export type TMutateArticleFormProps =
  TGeneralMutateFormProps<TMutateArticleFormInput> & {
    isFormDisabled?: boolean;
    articleTypeList: TArticleType[];
    articleCategoryList: TArticleCategory[];
    questionList: TGetQuestionListResponse[];
    articleFileTypeList: TGetArticleFileTypeListResponse[];
  };
