import DashboardDescriptionSection from '@components/DashboardDescriptionSection';
import MutateQuestionForm from '@components/MutateQuestionForm';
import ReactQueryWrapper from '@components/ReactQueryWrapper';
import { useGetSingleQuestion, useUpdateQuestion } from '@hooks/questions';
import DashboardLayout from '@layouts/DashboardLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

function EditNewQuestion() {
  const { t } = useTranslation();
  const router = useRouter();
  const { questionId } = router.query;
  const { isLoading, mutate: updateQuestion } = useUpdateQuestion(
    questionId as string
  );
  const { status, data: question } = useGetSingleQuestion(questionId as string);
  return (
    <React.Fragment>
      <DashboardDescriptionSection
        title={t('questions-edit.title')}
        description={t('questions-edit.description')}
        hasBackButton={true}
      />
      <ReactQueryWrapper status={status}>
        <MutateQuestionForm
          isLoading={isLoading}
          initialValues={question}
          onFinish={(inputs) => {
            updateQuestion(inputs);
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

EditNewQuestion.getLayout = DashboardLayout;

export default EditNewQuestion;
