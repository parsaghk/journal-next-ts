import {
  DeleteOutlined,
  DownloadOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { useTokenStore } from '@store/use-token';
import {
  Button,
  Form,
  Input,
  Select,
  Space,
  Typography,
  Upload,
  UploadFile,
} from 'antd';
import { useTranslation } from 'react-i18next';
import { TAttachmentsDataStepProps } from './types';

export default function AttachmentsDataStep({
  articleFileTypeList,
}: TAttachmentsDataStepProps) {
  const accessToken = useTokenStore((state) => state.accessToken);
  const { t } = useTranslation();
  return (
    <Form.Item
      name="fileList"
      label={t('mutate-article-form.form.upload-files.label')}
      valuePropName="fileList"
      rules={[
        {
          required: true,
          message: t(
            'mutate-article-form.form.upload-files.validations.required-message'
          ),
          // validator: (_, value) => {
          //   value?.length
          //     ? Promise.resolve()
          //     : Promise.reject('You must upload a file');
          // },
        },
      ]}
      getValueFromEvent={(e) => {
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
      }}
    >
      <Upload
        action="/api/storage/upload"
        headers={{ Authorization: `Bearer ${accessToken}` }}
        multiple={false}
        itemRender={(
          _,
          currentFile: UploadFile,
          fileList: UploadFile[],
          actions
        ) => {
          const index = fileList.findIndex(
            (file) => file.uid === currentFile.uid
          );
          return (
            <div className="grid grid-cols-24 gap-4 items-baseline">
              {index === 0 ? (
                <>
                  <Typography.Text className="font-[500] col-span-1">
                    {t(
                      'mutate-article-form.form.upload-files.row-number.label'
                    )}
                  </Typography.Text>
                  <Typography.Text className="font-[500] col-span-5">
                    {t(
                      'mutate-article-form.form.upload-files.description.label'
                    )}
                  </Typography.Text>
                  <Typography.Text className="font-[500] col-span-5">
                    {t('mutate-article-form.form.upload-files.file-type.label')}
                  </Typography.Text>
                  <Typography.Text className="font-[500] col-span-6">
                    {t('mutate-article-form.form.upload-files.file-name.label')}
                  </Typography.Text>
                  <Typography.Text className="font-[500] col-span-2">
                    {t('mutate-article-form.form.upload-files.file-size.label')}
                  </Typography.Text>
                  <Typography.Text className="font-[500] col-span-5">
                    {t('mutate-article-form.form.upload-files.actions.label')}
                  </Typography.Text>
                </>
              ) : null}
              <Typography.Text className="col-span-1">
                {index + 1}.
              </Typography.Text>
              <Form.Item
                name={['fileList', index, 'description']}
                className="col-span-5"
              >
                <Input
                  placeholder={t(
                    'mutate-article-form.form.upload-files.description.placeholder'
                  )}
                />
              </Form.Item>
              <Form.Item
                className="col-span-5"
                name={['fileList', index, 'articleFileTypeId']}
                rules={[
                  {
                    required: true,
                    message: t(
                      'mutate-article-form.form.upload-files.file-type.validations.required-message'
                    ),
                  },
                ]}
              >
                <Select
                  placeholder={t(
                    'mutate-article-form.form.upload-files.file-type.placeholder'
                  )}
                >
                  {articleFileTypeList.map((articleFileType) => (
                    <Select.Option key={articleFileType.id}>
                      {articleFileType.title}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Typography.Text className="truncate col-span-6">
                {currentFile.name}
              </Typography.Text>
              <Typography.Text className="col-span-2">
                {`${Math.round(Number(currentFile.size) / 1000)} KB`}
              </Typography.Text>
              <Space direction="horizontal" className="col-span-5">
                <Button
                  type="link"
                  onClick={actions.download}
                  icon={<DownloadOutlined />}
                >
                  {t('mutate-article-form.form.upload-files.actions.download')}
                </Button>
                <Button
                  type="text"
                  onClick={actions.remove}
                  danger
                  icon={<DeleteOutlined />}
                >
                  {t('mutate-article-form.form.upload-files.actions.delete')}
                </Button>
              </Space>
            </div>
          );
        }}
      >
        <Button type="primary" ghost className="mb-4" icon={<UploadOutlined />}>
          {t('mutate-article-form.form.upload-files.upload')}
        </Button>
      </Upload>
    </Form.Item>
  );
}
