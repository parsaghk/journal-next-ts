import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { TRegisterRequest } from '@api/auth';
import ReactQueryWrapper from '@components/ReactQueryWrapper';
import { useRegister } from '@hooks/auth';
import { useGetCityListOfState } from '@hooks/city';
import { useGetAllCountryList } from '@hooks/country';
import { useGetStateListOfCountry } from '@hooks/state';
import DefaultLayout from '@layouts/DefaultLayout';
import { filterSelectInput } from '@utils/filter-select-input.util';
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Steps,
  theme,
} from 'antd';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react';

type TRegisterForm = {
  email: string;
  username: string;
  password: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  position?: string;
  institution?: string;
  department?: string;
  address?: string;
  postalCode?: string;
  countryId: string;
  stateId?: string;
  cityId?: string;
  personalKeywordList: string[];
};

export default function RegisterPage() {
  const [inputsStatus, setInputsStatus] = React.useState({
    isCountryInputDisabled: true,
    isStateInputDisabled: true,
    isCityInputDisabled: true,
  });
  const [countryId, setCountryId] = React.useState<string | null>(null);
  const [stateId, setStateId] = React.useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<TRegisterForm>>({});
  const {
    status: allCountryListStatus,
    data: allCountryList,
    refetch: refetchAllCountryList,
  } = useGetAllCountryList();
  const { status: stateListOfCountryStatus, data: stateListOfCountry } =
    useGetStateListOfCountry(countryId as string, { enabled: !!countryId });
  const { status: cityListOfStateStatus, data: cityListOfState } =
    useGetCityListOfState(stateId as string, { enabled: !!stateId });
  const { mutate: register } = useRegister();
  const [form] = Form.useForm<TRegisterForm>();
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = React.useState<number>(0);

  const {
    token: { colorBgContainer, colorError },
  } = theme.useToken();
  const stepList = [
    {
      title: t('register.login-details.step-key'),
    },
    {
      title: t('register.personal-information.step-key'),
    },
    {
      title: t('register.institution-related-information.step-key'),
    },
    {
      title: t('register.areas-of-interest-or-expertise.step-key'),
    },
  ];
  async function goNextStep() {
    if (currentStep === 1) {
      setInputsStatus((prevStatus) => ({
        ...prevStatus,
        isCountryInputDisabled: false,
      }));
      refetchAllCountryList();
    }
    await form.validateFields();
    setFormData((prev) => ({ ...prev, ...form.getFieldsValue() }));
    setCurrentStep((prevStep) => prevStep + 1);
  }
  function goPreviousStep() {
    setFormData((prev) => ({ ...prev, ...form.getFieldsValue() }));
    setCurrentStep((prevStep) => prevStep - 1);
  }

  function buildButtonSection() {
    return (
      <Space align="center">
        {currentStep === stepList.length - 1 ? (
          <Form.Item className="m-0">
            <Button type="primary" htmlType="submit">
              {t('register.submit')}
            </Button>
          </Form.Item>
        ) : null}
        {currentStep < stepList.length - 1 ? (
          <Button type="primary" onClick={() => goNextStep()}>
            {t('register.next')}
          </Button>
        ) : null}
        {currentStep > 0 ? (
          <Button type="default" onClick={() => goPreviousStep()}>
            {t('register.previous')}
          </Button>
        ) : null}
      </Space>
    );
  }

  const formList = React.Children.toArray([
    <React.Fragment>
      <Form.Item
        label={t('register.login-details.username.label')}
        name="username"
        rules={[
          {
            required: true,
            message: t(
              'register.login-details.username.validations.required-message'
            ),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('register.login-details.email.label')}
        name="email"
        rules={[
          {
            required: true,
            message: t(
              'register.login-details.email.validations.required-message'
            ),
          },
          {
            type: 'email',
            message: t('register.login-details.email.validations.type-message'),
          },
        ]}
      >
        <Input type="email" />
      </Form.Item>
      <Form.Item
        label={t('register.login-details.password.label')}
        name="password"
        rules={[
          {
            required: true,
            message: t(
              'register.login-details.password.validations.required-message'
            ),
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
    </React.Fragment>,
    <React.Fragment>
      <Form.Item
        label={t('register.personal-information.first-name.label')}
        name="firstName"
        rules={[
          {
            required: true,
            message: t(
              'register.personal-information.first-name.validations.required-message'
            ),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('register.personal-information.middle-name.label')}
        name="middleName"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('register.personal-information.last-name.label')}
        name="lastName"
        rules={[
          {
            required: true,
            message: t(
              'register.personal-information.last-name.validations.required-message'
            ),
          },
        ]}
      >
        <Input />
      </Form.Item>
    </React.Fragment>,
    <React.Fragment>
      <Form.Item
        label={t('register.institution-related-information.position.label')}
        name="position"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('register.institution-related-information.institution.label')}
        name="institution"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('register.institution-related-information.department.label')}
        name="department"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('register.institution-related-information.address.label')}
        name="address"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('register.institution-related-information.zip-code.label')}
        name="postalCode"
      >
        <Input />
      </Form.Item>
      <Row gutter={8}>
        <Col span={8}>
          <Form.Item
            label={t('register.institution-related-information.country.label')}
            name="countryId"
          >
            <ReactQueryWrapper
              status={
                inputsStatus.isCountryInputDisabled
                  ? 'idle'
                  : allCountryListStatus
              }
            >
              <Select
                onSelect={(countryId) => {
                  setInputsStatus((prevStatus) => ({
                    ...prevStatus,
                    isStateInputDisabled: false,
                  }));
                  form.setFieldValue('countryId', countryId);
                  setCountryId(countryId);
                }}
                showSearch={true}
                filterOption={filterSelectInput}
                disabled={inputsStatus.isCountryInputDisabled}
              >
                {allCountryList?.map((country) => (
                  <Select.Option key={country.id}>{country.name}</Select.Option>
                ))}
              </Select>
            </ReactQueryWrapper>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label={t('register.institution-related-information.state.label')}
            name="stateId"
          >
            <ReactQueryWrapper
              status={
                inputsStatus.isStateInputDisabled
                  ? 'idle'
                  : stateListOfCountryStatus
              }
            >
              <Select
                onSelect={(stateId) => {
                  setInputsStatus((prevStatus) => ({
                    ...prevStatus,
                    isCityInputDisabled: false,
                  }));
                  form.setFieldValue('stateId', stateId);
                  setStateId(stateId);
                }}
                showSearch={true}
                filterOption={filterSelectInput}
                disabled={inputsStatus.isStateInputDisabled}
              >
                {stateListOfCountry?.map((state) => (
                  <Select.Option key={state.id}>{state.name}</Select.Option>
                ))}
              </Select>
            </ReactQueryWrapper>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label={t('register.institution-related-information.city.label')}
            name="cityId"
          >
            <ReactQueryWrapper
              status={
                inputsStatus.isCityInputDisabled
                  ? 'idle'
                  : cityListOfStateStatus
              }
            >
              <Select
                onSelect={(cityId) => {
                  form.setFieldValue('cityId', cityId);
                }}
                showSearch={true}
                filterOption={filterSelectInput}
                disabled={inputsStatus.isCityInputDisabled}
              >
                {cityListOfState?.map((city) => (
                  <Select.Option key={city.id}>{city.name}</Select.Option>
                ))}
              </Select>
            </ReactQueryWrapper>
          </Form.Item>
        </Col>
      </Row>
    </React.Fragment>,
    <Form.List
      initialValue={['', '']}
      name="personalKeywordList"
      rules={[
        {
          validator: async (_, names) => {
            if (!names || names.length < 2) {
              return Promise.reject(
                new Error(
                  t(
                    'register.areas-of-interest-or-expertise.personal-keywords.validations.minimum-two-item-message'
                  )
                )
              );
            }
          },
        },
      ]}
    >
      {(fields, { add, remove }, { errors }) => (
        <>
          {fields.map((field, index) => (
            <Form.Item
              label={
                index === 0
                  ? t(
                      'register.areas-of-interest-or-expertise.personal-keywords.label'
                    )
                  : ''
              }
              required={false}
              key={field.key}
            >
              <Form.Item
                {...field}
                validateTrigger={['onChange', 'onBlur']}
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: t(
                      'register.areas-of-interest-or-expertise.personal-keywords.validations.non-empty-field'
                    ),
                  },
                ]}
                noStyle
              >
                <Input
                  placeholder={t(
                    'register.areas-of-interest-or-expertise.personal-keywords.placeholder'
                  )}
                  style={{ width: '60%' }}
                />
              </Form.Item>

              {fields.length > 1 ? (
                <DeleteOutlined
                  className="rtl:mr-2 ltr:ml-2"
                  style={{ color: colorError }}
                  // className="dynamic-delete-button"
                  onClick={() => remove(field.name)}
                />
              ) : null}
            </Form.Item>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              style={{ width: '60%' }}
              icon={<PlusOutlined />}
            >
              {t(
                'register.areas-of-interest-or-expertise.personal-keywords.button'
              )}
            </Button>
            <Form.ErrorList errors={errors} />
          </Form.Item>
        </>
      )}
    </Form.List>,
  ]);
  return (
    <React.Fragment>
      <Row className="mb-2">
        <Col
          span={22}
          offset={1}
          className="p-4 rounded"
          style={{ backgroundColor: colorBgContainer }}
        >
          <Steps current={currentStep} items={stepList} />
        </Col>
      </Row>
      <Row>
        <Col span={22} offset={1}>
          <Form
            form={form}
            layout="vertical"
            onFinish={() => {
              Object.assign(formData, form.getFieldsValue());
              register(formData as TRegisterRequest);
            }}
          >
            <Card className="mb-2" title={stepList[currentStep].title}>
              {formList[currentStep]}
            </Card>
            <Card>{buildButtonSection()}</Card>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  );
}

RegisterPage.getLayout = DefaultLayout;

export const getStaticProps: GetStaticProps = async (props) => {
  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ['countries'],
  //   queryFn: () => getCountryListApi(),
  // });

  return {
    props: {
      // dehydratedState: dehydrate(queryClient),
      ...(await serverSideTranslations(props.locale as string, ['common'])),
    },
  };
};
