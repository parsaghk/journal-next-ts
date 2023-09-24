import { filterSelectInput } from '@utils/filter-select-input.util';
import { Col, Form, Input, Row, Select } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { TGeneralInformationStepProps } from './types';

export default function GeneralInformationStep({
  articleTypeList,
  articleCategoryList,
  form,
}: TGeneralInformationStepProps) {
  const { t } = useTranslation();
  return (
    <Row gutter={8}>
      <Col md={{ span: 24 }} lg={{ span: 12 }}>
        <Form.Item
          name="subject"
          label={t('mutate-article-form.form.subject.label')}
          rules={[
            {
              required: true,
              message: t(
                'mutate-article-form.form.subject.validations.required-message'
              ),
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          name="shortDescription"
          label={t('mutate-article-form.form.short-description.label')}
          rules={[
            {
              required: true,
              message: t(
                'mutate-article-form.form.short-description.validations.required-message'
              ),
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="articleTypeId"
          label={t('mutate-article-form.form.article-type.label')}
          rules={[
            {
              required: true,
              message: t(
                'mutate-article-form.form.article-type.validations.required-message'
              ),
            },
          ]}
        >
          <Select
            onSelect={(articleTypeId) => {
              form.setFieldValue('articleTypeId', articleTypeId);
            }}
            showSearch={true}
            filterOption={filterSelectInput}
          >
            {articleTypeList.map((articleType) => (
              <Select.Option key={articleType.id}>
                {articleType.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="articleCategoryId"
          label={t('mutate-article-form.form.article-category.label')}
          rules={[
            {
              required: true,
              message: t(
                'mutate-article-form.form.article-category.validations.required-message'
              ),
            },
          ]}
        >
          <Select
            onSelect={(articleCategoryId) => {
              form.setFieldValue('articleCategoryId', articleCategoryId);
            }}
            showSearch={true}
            filterOption={filterSelectInput}
          >
            {articleCategoryList.map((articleCategory) => (
              <Select.Option key={articleCategory.id}>
                {articleCategory.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
    </Row>
  );
}
