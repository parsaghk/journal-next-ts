import DashboardDescriptionSection from '@components/DashboardDescriptionSection';
import MutateArticleCategoryForm from '@components/MutateArticleCategoryForm';
import ReactQueryWrapper from '@components/ReactQueryWrapper';
import {
  useGetSingleArticleCategory,
  useUpdateArticleCategory,
} from '@hooks/article-categories';
import DashboardLayout from '@layouts/DashboardLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

function EditNewArticleCategory() {
  const { t } = useTranslation();
  const router = useRouter();
  const { articleCategoryId } = router.query;
  const { isLoading, mutate: updateArticleCategory } = useUpdateArticleCategory(
    articleCategoryId as string
  );
  const { status, data: articleCategory } = useGetSingleArticleCategory(
    articleCategoryId as string
  );
  return (
    <React.Fragment>
      <DashboardDescriptionSection
        title={t('article-categories-edit.title')}
        description={t('article-categories-edit.description')}
        hasBackButton={true}
      />
      <ReactQueryWrapper status={status}>
        <MutateArticleCategoryForm
          isLoading={isLoading}
          initialValues={articleCategory}
          onFinish={(inputs) => {
            updateArticleCategory(inputs);
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

EditNewArticleCategory.getLayout = DashboardLayout;

export default EditNewArticleCategory;
