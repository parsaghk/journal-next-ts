import { useLogin } from '@hooks/auth';
import DefaultLayout from '@layouts/DefaultLayout';
import { Button, Col, Form, Input, Row, Space, theme } from 'antd';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type TLoginForm = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const { t } = useTranslation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { mutate: login } = useLogin();
  const [form] = Form.useForm<TLoginForm>();
  return (
    <Row justify="center">
      <Col
        className="p-4"
        style={{ backgroundColor: colorBgContainer }}
        xs={{ span: 24 }}
        md={{ span: 12 }}
        lg={{ span: 8 }}
      >
        <Space align="center" className="w-full justify-center">
          <Link href="/">
            <Image src="/logo.svg" width={80} height={80} alt="logo" />
          </Link>
        </Space>
        <Form
          name="basic"
          layout="vertical"
          form={form}
          initialValues={{ remember: true }}
          onFinish={(formData) => {
            login(formData);
          }}
          autoComplete="off"
        >
          <Form.Item
            label={t('login.username.label')}
            name="username"
            rules={[
              {
                required: true,
                message: t('login.username.validations.required-message'),
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={t('login.password.label')}
            name="password"
            rules={[
              {
                required: true,
                message: t('login.password.validations.required-message'),
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item className="mt-8">
            <Button block type="primary" htmlType="submit">
              {t('login.submit')}
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

LoginPage.getLayout = DefaultLayout;

export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props.locale as string, ['common'])),
    },
  };
};
