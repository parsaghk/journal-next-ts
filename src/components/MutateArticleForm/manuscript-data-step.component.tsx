import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Collapse, Form, Input, theme } from 'antd';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import React from 'react';

export default function ManuscriptDataStep() {
  const {
    token: { colorError },
  } = theme.useToken();
  const { t } = useTranslation();
  const TextEditor = dynamic(() => import('@components/TextEditor'), {
    ssr: false,
  });
  return (
    <React.Fragment>
      <Collapse
        className="mb-4"
        items={[
          {
            key: 1,
            label: t('mutate-article-form.form.title.label'),
            children: (
              <Form.Item
                className="pb-16"
                name="title"
                rules={[
                  {
                    required: true,
                    message: t(
                      'mutate-article-form.form.title.validations.required-message'
                    ),
                  },
                ]}
              >
                <TextEditor className="h-60" />
              </Form.Item>
            ),
          },
        ]}
      />
      <Collapse
        className="mb-4"
        items={[
          {
            key: 1,
            label: t('mutate-article-form.form.abstract.label'),
            children: (
              <Form.Item
                className="pb-16"
                name="abstract"
                rules={[
                  {
                    required: true,
                    message: t(
                      'mutate-article-form.form.abstract.validations.required-message'
                    ),
                  },
                ]}
              >
                <TextEditor className="h-60" />
              </Form.Item>
            ),
          },
        ]}
      />
      <Collapse
        items={[
          {
            key: 1,
            label: t('mutate-article-form.form.keywords.label'),
            children: (
              <Form.List name="keywordList">
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {fields.map((field) => (
                      <Form.Item required={false} key={field.key}>
                        <Form.Item
                          {...field}
                          validateTrigger={['onChange', 'onBlur']}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message: t(
                                'mutate-article-form.form.keywords.validations.non-empty-field'
                              ),
                            },
                          ]}
                          noStyle
                        >
                          <Input
                            placeholder={t(
                              'mutate-article-form.form.keywords.placeholder'
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
                        {t('mutate-article-form.form.keywords.add')}
                      </Button>
                      <Form.ErrorList errors={errors} />
                    </Form.Item>
                  </>
                )}
              </Form.List>
            ),
          },
        ]}
      />
    </React.Fragment>
  );
}
