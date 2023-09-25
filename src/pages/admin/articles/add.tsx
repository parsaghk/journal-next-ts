import { TArticleCategory } from '@api/article-categories';
import { TArticleType } from '@api/article-types';
import { TCreateArticleRequest } from '@api/articles';
import { TGetQuestionListResponse } from '@api/questions';
import DashboardDescriptionSection from '@components/DashboardDescriptionSection';
import MutateArticleForm from '@components/MutateArticleForm';
import ReactQueryWrapper from '@components/ReactQueryWrapper';
import { useGetAllArticleCategoryList } from '@hooks/article-categories';
import { useGetAllArticleFileTypeList } from '@hooks/article-file-types';
import { useGetAllArticleTypeList } from '@hooks/article-types';
import { useCreateArticle } from '@hooks/articles';
import { useGetAllQuestionList } from '@hooks/questions';
import DashboardLayout from '@layouts/DashboardLayout';
import { QuestionTypeEnum } from '@shared/enums';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

function AddNewArticle() {
  const { t } = useTranslation();
  const { isLoading, mutate: createArticle } = useCreateArticle();
  const {
    status: getAllArticleCategoryApiStatus,
    data: allArticleCategoryList,
  } = useGetAllArticleCategoryList();
  const { status: getAllArticleTypeApiStatus, data: allArticleTypeList } =
    useGetAllArticleTypeList();
  const {
    status: getAllArticleFileTypeApiStatus,
    data: allArticleFileTypeList,
  } = useGetAllArticleFileTypeList({});
  const { status: getAllQuestionListApiStatus, data: allQuestionList } =
    useGetAllQuestionList({
      filters: { type: QuestionTypeEnum.SUBMITTING_ARTICLE },
    });
  return (
    <React.Fragment>
      <DashboardDescriptionSection
        title={t('articles-new.title')}
        description={t('articles-new.description')}
        hasBackButton={true}
      />
      <ReactQueryWrapper
        status={
          getAllArticleCategoryApiStatus &&
          getAllArticleTypeApiStatus &&
          getAllArticleFileTypeApiStatus &&
          getAllQuestionListApiStatus
        }
      >
        <MutateArticleForm
          articleCategoryList={allArticleCategoryList as TArticleCategory[]}
          articleTypeList={allArticleTypeList as TArticleType[]}
          questionList={allQuestionList as TGetQuestionListResponse[]}
          articleFileTypeList={allArticleFileTypeList!}
          isLoading={isLoading}
          onFinish={({
            fileList,
            fundingAcknowledgement: _,
            ...otherInputs
          }) => {
            const requestDto: TCreateArticleRequest = {
              fileList: fileList.map((file) => ({
                storageId: file.response?.id as string,
                typeId: file.articleFileTypeId,
                description: file.description,
              })),
              ...otherInputs,
            };
            createArticle(requestDto);
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

AddNewArticle.getLayout = DashboardLayout;

export default AddNewArticle;
