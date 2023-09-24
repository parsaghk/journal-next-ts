import { Form, Input } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { TQuestionStepProps } from './types';

export default function QuestionStep({ questionList }: TQuestionStepProps) {
  const { t } = useTranslation();
  return (
    <Form.List name="questionList">
      {() => (
        <>
          {React.Children.toArray(
            questionList.map((question, index) => (
              <>
                <Form.Item
                  name={[index, 'questionId']}
                  hidden
                  initialValue={question.id}
                >
                  <Input placeholder="First Name" hidden value={question.id} />
                </Form.Item>
                <Form.Item
                  label={question.content}
                  name={[index, 'reply']}
                  rules={[
                    {
                      required: true,
                      message: t(
                        'mutate-article-form.form.questions.validations.required-message'
                      ),
                    },
                  ]}
                >
                  <Input
                    placeholder={t(
                      'mutate-article-form.form.questions.placeholder'
                    )}
                  />
                </Form.Item>
              </>
            ))
          )}
        </>
      )}
    </Form.List>
  );
}
