import DashboardDescriptionSection from '@components/DashboardDescriptionSection';
import MutateArticleFileTypeForm from '@components/MutateArticleFileTypeForm';
import ReactQueryWrapper from '@components/ReactQueryWrapper';
import {
  useGetSingleArticleFileType,
  useUpdateArticleFileType,
} from '@hooks/article-file-types';
import DashboardLayout from '@layouts/DashboardLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

function EditNewArticleFileType() {
  const { t } = useTranslation();
  const router = useRouter();
  const { articleFileTypeId } = router.query;
  const { isLoading, mutate: updateArticleFileType } = useUpdateArticleFileType(
    articleFileTypeId as string
  );
  const { status, data: articleFileType } = useGetSingleArticleFileType(
    articleFileTypeId as string
  );
  return (
    <React.Fragment>
      <DashboardDescriptionSection
        title={t('article-file-types-edit.title')}
        description={t('article-file-types-edit.description')}
        hasBackButton={true}
      />
      <ReactQueryWrapper status={status}>
        <MutateArticleFileTypeForm
          isLoading={isLoading}
          initialValues={articleFileType}
          onFinish={(inputs) => {
            updateArticleFileType(inputs);
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

EditNewArticleFileType.getLayout = DashboardLayout;

export default EditNewArticleFileType;
