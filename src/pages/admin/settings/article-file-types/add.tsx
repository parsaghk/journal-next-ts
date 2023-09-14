import DashboardDescriptionSection from '@components/DashboardDescriptionSection';
import MutateArticleFileTypeForm from '@components/MutateArticleFileTypeForm';
import { useCreateArticleFileType } from '@hooks/article-file-types';
import DashboardLayout from '@layouts/DashboardLayout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

function AddNewArticleFileType() {
  const { t } = useTranslation();
  const { isLoading, mutate: createArticleFileType } =
    useCreateArticleFileType();

  return (
    <React.Fragment>
      <DashboardDescriptionSection
        title={t('article-file-types-new.title')}
        description={t('article-file-types-new.description')}
        hasBackButton={true}
      />
      <MutateArticleFileTypeForm
        isLoading={isLoading}
        onFinish={(inputs) => {
          createArticleFileType(inputs);
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

AddNewArticleFileType.getLayout = DashboardLayout;

export default AddNewArticleFileType;
