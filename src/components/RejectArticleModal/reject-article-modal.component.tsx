import { Form, Input, Modal } from 'antd';
import { useTranslation } from 'next-i18next';
import { TRejectArticleModalFormInput, TRejectArticleModalPops } from './types';

export default function RejectArticleModal({
  open,
  onSubmit,
  onCancel,
}: TRejectArticleModalPops) {
  const { t } = useTranslation();
  const [form] = Form.useForm<TRejectArticleModalFormInput>();
  return (
    <Modal
      title={t('reject-article-modal.title')}
      okText={t('reject-article-modal.submit')}
      cancelText={t('reject-article-modal.cancel')}
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
          name="comment"
          label={t('reject-article-modal.form.comment.label')}
          rules={[
            {
              required: true,
              message: t(
                'reject-article-modal.form.comment.validations.required-message'
              ),
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
