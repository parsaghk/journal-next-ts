import DashboardDescriptionSection from '@components/DashboardDescriptionSection';
import MutateArticleTypeForm from '@components/MutateArticleTypeForm';
import ReactQueryWrapper from '@components/ReactQueryWrapper';
import {
  useGetSingleArticleType,
  useUpdateArticleType,
} from '@hooks/article-types';
import DashboardLayout from '@layouts/DashboardLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

function EditNewArticleType() {
  const { t } = useTranslation();
  const router = useRouter();
  const { articleTypeId } = router.query;
  const { isLoading, mutate: updateArticleType } = useUpdateArticleType(
    articleTypeId as string
  );
  const { status, data: articleType } = useGetSingleArticleType(
    articleTypeId as string
  );
  return (
    <React.Fragment>
      <DashboardDescriptionSection
        title={t('article-types-edit.title')}
        description={t('article-types-edit.description')}
        hasBackButton={true}
      />
      <ReactQueryWrapper status={status}>
        <MutateArticleTypeForm
          isLoading={isLoading}
          initialValues={articleType}
          onFinish={(inputs) => {
            updateArticleType(inputs);
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
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};

EditNewArticleType.getLayout = DashboardLayout;

export default EditNewArticleType;
