import { TUpdateArticleRequest } from '@api/articles';
import DashboardDescriptionSection from '@components/DashboardDescriptionSection';
import MutateArticleForm, {
  TMutateArticleFormInput,
} from '@components/MutateArticleForm';
import ReactQueryWrapper from '@components/ReactQueryWrapper';
import { useGetAllArticleCategoryList } from '@hooks/article-categories';
import { useGetAllArticleFileTypeList } from '@hooks/article-file-types';
import { useGetAllArticleTypeList } from '@hooks/article-types';
import { useGetSingleArticle, useUpdateArticle } from '@hooks/articles';
import { useGetAllQuestionList } from '@hooks/questions';
import DashboardLayout from '@layouts/DashboardLayout';
import { QuestionTypeEnum } from '@shared/enums';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

function EditNewArticle() {
  const { t } = useTranslation();
  const router = useRouter();
  const { articleId } = router.query;
  const { isLoading, mutate: updateArticle } = useUpdateArticle(
    articleId as string
  );
  const { status: getSingleArticleStatus, data: article } = useGetSingleArticle(
    articleId as string
  );
  const { status: getAllArticleCategoryStatus, data: allArticleCategoryList } =
    useGetAllArticleCategoryList();
  const { status: getAllArticleTypeStatus, data: allArticleTypeList } =
    useGetAllArticleTypeList();
  const { status: getAllArticleFileTypeStatus, data: allArticleFileTypeList } =
    useGetAllArticleFileTypeList({});
  const { status: getAllQuestionListStatus, data: allQuestionList } =
    useGetAllQuestionList({
      filters: { type: QuestionTypeEnum.SUBMITTING_ARTICLE },
    });
  const initialValues: TMutateArticleFormInput | undefined = article
    ? {
        ...article,
        fundingAcknowledgement: true,
        articleTypeId: article.type.id,
        articleCategoryId: article.category.id,
        fileList: article.fileList.map((file) => ({
          uid: file.id,
          description: file.description,
          articleFileTypeId: file.type.id,
          status: 'done',
          name: file.storage.filePath,
          url: `/api/storage/${file.id}`,
        })),
      }
    : undefined;
  return (
    <React.Fragment>
      <DashboardDescriptionSection
        title={t('articles-edit.title')}
        description={t('articles-edit.description')}
        hasBackButton={true}
      />
      <ReactQueryWrapper
        status={
          getSingleArticleStatus &&
          getAllArticleCategoryStatus &&
          getAllArticleTypeStatus &&
          getAllArticleFileTypeStatus &&
          getAllQuestionListStatus
        }
      >
        <MutateArticleForm
          articleCategoryList={allArticleCategoryList!}
          articleTypeList={allArticleTypeList!}
          articleFileTypeList={allArticleFileTypeList!}
          questionList={allQuestionList!}
          isLoading={isLoading}
          initialValues={initialValues}
          onFinish={({
            fileList,
            fundingAcknowledgement: _,
            ...otherInputs
          }) => {
            const requestDto: TUpdateArticleRequest = {
              fileList: fileList.map((file) => ({
                storageId: file.response?.id as string,
                typeId: file.articleFileTypeId,
                description: file.description,
              })),
              ...otherInputs,
            };
            updateArticle(requestDto);
          }}
        />
      </ReactQueryWrapper>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props.locale as string, ['common'])),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

EditNewArticle.getLayout = DashboardLayout;

export default EditNewArticle;
