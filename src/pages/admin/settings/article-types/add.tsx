import DashboardDescriptionSection from '@components/DashboardDescriptionSection';
import MutateArticleTypeForm from '@components/MutateArticleTypeForm';
import { useCreateArticleType } from '@hooks/article-types';
import DashboardLayout from '@layouts/DashboardLayout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

function AddNewArticleType() {
  const { t } = useTranslation();
  const { mutate: createArticleType } = useCreateArticleType();

  return (
    <React.Fragment>
      <DashboardDescriptionSection
        title={t('article-types-new.title')}
        description={t('article-types-new.description')}
        hasBackButton={true}
      />
      \
      <MutateArticleTypeForm
        onFinish={(inputs) => {
          createArticleType(inputs);
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

AddNewArticleType.getLayout = DashboardLayout;

export default AddNewArticleType;
