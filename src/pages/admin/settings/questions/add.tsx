import DashboardDescriptionSection from '@components/DashboardDescriptionSection';
import MutateQuestionForm from '@components/MutateQuestionForm';
import { useCreateQuestion } from '@hooks/questions';
import DashboardLayout from '@layouts/DashboardLayout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

function AddNewQuestion() {
  const { t } = useTranslation();
  const { isLoading, mutate: createQuestion } = useCreateQuestion();

  return (
    <React.Fragment>
      <DashboardDescriptionSection
        title={t('questions-new.title')}
        description={t('questions-new.description')}
        hasBackButton={true}
      />
      <MutateQuestionForm
        isLoading={isLoading}
        onFinish={(inputs) => {
          createQuestion(inputs);
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

AddNewQuestion.getLayout = DashboardLayout;

export default AddNewQuestion;
