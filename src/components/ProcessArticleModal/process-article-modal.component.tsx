import { Form, Modal, Select } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';
import {
  TProcessArticleModalFormInput,
  TProcessArticleModalPops,
} from './types';

export default function ProcessArticleModal({
  editorList,
  jurorList,
  open,
  onSubmit,
  onCancel,
}: TProcessArticleModalPops) {
  const { t } = useTranslation();
  const [form] = Form.useForm<TProcessArticleModalFormInput>();
  return (
    <Modal
      title={t('process-article-modal.title')}
      okText={t('process-article-modal.submit')}
      cancelText={t('process-article-modal.cancel')}
      open={open}
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onSubmit(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="editorId"
          label={t('process-article-modal.form.editors.label')}
          rules={[
            {
              required: true,
              message: t(
                'process-article-modal.form.editors.validations.required-message'
              ),
            },
          ]}
        >
          <Select>
            {editorList.map((editor) => (
              <Select.Option key={editor.id}>
                {editor.firstName} {editor.lastName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="jurorId"
          label={t('process-article-modal.form.jurors.label')}
          rules={[
            {
              required: true,
              message: t(
                'process-article-modal.form.jurors.validations.required-message'
              ),
            },
          ]}
        >
          <Select>
            {jurorList.map((juror) => (
              <Select.Option key={juror.id}>
                {juror.firstName} {juror.lastName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}
