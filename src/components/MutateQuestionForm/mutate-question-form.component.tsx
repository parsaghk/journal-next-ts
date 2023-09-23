import { QuestionTypeEnum } from '@shared/enums';
import { TGeneralMutateFormProps } from '@shared/types';
import { Button, Col, Form, Input, Row, Select, theme } from 'antd';
import { useTranslation } from 'next-i18next';
import { TMutateQuestionFormInput } from './types';

export default function MutateQuestionForm({
  isLoading = false,
  onFinish,
  initialValues,
}: TGeneralMutateFormProps<TMutateQuestionFormInput>) {
  const { t } = useTranslation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [form] = Form.useForm<TMutateQuestionFormInput>();
  return (
    <Form
      layout="vertical"
      initialValues={initialValues}
      onFinish={onFinish}
      form={form}
    >
      <Row className="w-full p-4" style={{ backgroundColor: colorBgContainer }}>
        <Col span={24}>
          <Form.Item
            name="content"
            label={t('mutate-question-form.content.label')}
            rules={[
              {
                required: true,
                message: t(
                  'mutate-question-form.content.validations.required-message'
                ),
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="type"
            label={t('mutate-question-form.type.label')}
            rules={[
              {
                required: true,
                message: t(
                  'mutate-question-form.label.validations.required-message'
                ),
              },
            ]}
          >
            <Select>
              {Object.values(QuestionTypeEnum).map((type) => (
                <Select.Option key={type}>{type}</Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        className="rounded p-4 mt-[24px] flex justify-end"
        style={{ backgroundColor: colorBgContainer }}
      >
        <Button
          loading={isLoading}
          type="primary"
          size="large"
          htmlType="submit"
        >
          {t('mutate-question-form.submit')}
        </Button>
      </Form.Item>
    </Form>
  );
}
