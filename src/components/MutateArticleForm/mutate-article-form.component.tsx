import { Button, Form, Space, Steps, theme } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';
import AdditionalInformationForm from './additional-information-form.component';
import AttachmentsDataStep from './attachments-data-step.component';
import GeneralInformationStep from './general-information-step.component';
import ManuscriptDataStep from './manuscript-data-step.component';
import QuestionStep from './question-step.component';
import { TMutateArticleFormInput, TMutateArticleFormProps } from './types';

export default function MutateArticleForm({
  isFormDisabled = false,
  isLoading = false,
  onFinish,
  initialValues,
  articleFileTypeList,
  questionList,
  articleTypeList,
  articleCategoryList,
}: TMutateArticleFormProps) {
  const { t } = useTranslation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [form] = Form.useForm<TMutateArticleFormInput>();
  const [formData, setFormData] = React.useState<
    Partial<TMutateArticleFormInput>
  >({});

  const [currentStep, setCurrentStep] = React.useState<number>(0);
  const stepList = [
    {
      title: t('mutate-article-form.steps.general-information'),
    },
    {
      title: t('mutate-article-form.steps.additional-information'),
    },
    {
      title: t('mutate-article-form.steps.attachments-data'),
    },
    {
      title: t('mutate-article-form.steps.manuscript-data'),
    },
    ...(questionList.length
      ? [
          {
            title: t('mutate-article-form.steps.questions'),
          },
        ]
      : []),
  ];

  async function goNextStep() {
    await form.validateFields();
    setFormData((prev) => ({ ...prev, ...form.getFieldsValue() }));
    setCurrentStep((prevStep) => prevStep + 1);
  }
  function goPreviousStep() {
    setFormData((prev) => ({ ...prev, ...form.getFieldsValue() }));
    setCurrentStep((prevStep) => prevStep - 1);
  }

  function ButtonSection() {
    return (
      <Space align="center">
        {currentStep === stepList.length - 1 ? (
          <Form.Item className="m-0">
            <Button loading={isLoading} type="primary" htmlType="submit">
              {t('mutate-article-form.form.submit')}
            </Button>
          </Form.Item>
        ) : null}
        {currentStep < stepList.length - 1 ? (
          <Button type="primary" onClick={() => goNextStep()}>
            {t('mutate-article-form.form.next')}
          </Button>
        ) : null}
        {currentStep > 0 ? (
          <Button type="default" onClick={() => goPreviousStep()}>
            {t('mutate-article-form.form.previous')}
          </Button>
        ) : null}
      </Space>
    );
  }
  const formList = React.Children.toArray([
    <GeneralInformationStep
      articleCategoryList={articleCategoryList}
      articleTypeList={articleTypeList}
      form={form}
    />,
    <AdditionalInformationForm />,
    <AttachmentsDataStep articleFileTypeList={articleFileTypeList} />,
    <ManuscriptDataStep />,
    <QuestionStep questionList={questionList} />,
  ]);
  return (
    <React.Fragment>
      <Steps
        className="p-4 mb-4"
        style={{ backgroundColor: colorBgContainer }}
        current={currentStep}
        items={stepList}
      />

      <Form
        disabled={isFormDisabled}
        initialValues={initialValues}
        form={form}
        layout="vertical"
        onFinish={() => {
          Object.assign(formData, form.getFieldsValue());
          onFinish(formData as TMutateArticleFormInput);
        }}
      >
        <div
          className="w-full p-4 mb-4"
          style={{ backgroundColor: colorBgContainer }}
        >
          {formList[currentStep]}
        </div>
        <div
          className="w-full p-4"
          style={{ backgroundColor: colorBgContainer }}
        >
          <ButtonSection />
        </div>
      </Form>
    </React.Fragment>
  );
}
