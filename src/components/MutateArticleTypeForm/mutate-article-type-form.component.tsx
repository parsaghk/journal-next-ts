import { TGeneralMutateFormProps } from '@shared/types';
import { Button, Col, Form, Input, Row, theme } from 'antd';
import { useTranslation } from 'next-i18next';
import { TMutateArticleTypeFormInput } from './types';

export default function MutateArticleTypeForm({
  isLoading = false,
  onFinish,
  initialValues,
}: TGeneralMutateFormProps<TMutateArticleTypeFormInput>) {
  const { t } = useTranslation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [form] = Form.useForm<TMutateArticleTypeFormInput>();
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
            name="title"
            label={t('mutate-article-type-form.title.label')}
            rules={[
              {
                required: true,
                message: t(
                  'mutate-article-type-form.title.validations.required-message'
                ),
              },
            ]}
          >
            <Input />
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
          {t('mutate-article-type-form.submit')}
        </Button>
      </Form.Item>
    </Form>
  );
}
