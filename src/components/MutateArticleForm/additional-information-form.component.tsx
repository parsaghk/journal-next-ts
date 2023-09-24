import { Checkbox, Form, Input } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';

export default function AdditionalInformationForm() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Form.Item
        valuePropName="checked"
        name="fundingAcknowledgement"
        label={t('mutate-article-form.form.funding-acknowledgement.label')}
        rules={[
          {
            validator: (_, value) => {
              return value
                ? Promise.resolve()
                : Promise.reject(
                    t(
                      'mutate-article-form.form.funding-acknowledgement.validations.required-message'
                    )
                  );
            },
          },
        ]}
      >
        <Checkbox>
          {t('mutate-article-form.form.funding-acknowledgement.text')}
        </Checkbox>
      </Form.Item>
      <Form.Item
        name="conflictOfInterest"
        label={t('mutate-article-form.form.conflict-of-interest.label')}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="competingInterestStatement"
        label={t('mutate-article-form.form.competing-interest-statement.label')}
      >
        <Input.TextArea />
      </Form.Item>
    </React.Fragment>
  );
}
