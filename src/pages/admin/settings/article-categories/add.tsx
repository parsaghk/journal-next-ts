import DashboardDescriptionSection from '@components/DashboardDescriptionSection';
import MutateArticleCategoryForm from '@components/MutateArticleCategoryForm';
import { useCreateArticleCategory } from '@hooks/article-categories';
import DashboardLayout from '@layouts/DashboardLayout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

function AddNewArticleCategory() {
  const { t } = useTranslation();
  const { isLoading, mutate: createArticleCategory } =
    useCreateArticleCategory();

  return (
    <React.Fragment>
      <DashboardDescriptionSection
        title={t('article-categories-new.title')}
        description={t('article-categories-new.description')}
        hasBackButton={true}
      />
      <MutateArticleCategoryForm
        isLoading={isLoading}
        onFinish={(inputs) => {
          createArticleCategory(inputs);
        }}
      />
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

AddNewArticleCategory.getLayout = DashboardLayout;

export default AddNewArticleCategory;
