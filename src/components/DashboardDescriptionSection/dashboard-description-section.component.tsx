import { ArrowRightOutlined } from '@ant-design/icons';
import { getPreviousPageUrl } from '@shared/helpers';
import { Button, Space, theme } from 'antd';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { TDashboardDescriptionSection } from './types';

export default function DashboardDescriptionSection({
  title,
  description,
  hasBackButton = false,
  actionList,
}: TDashboardDescriptionSection) {
  const { t } = useTranslation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const router = useRouter();
  return (
    <Space
      direction="vertical"
      className="mb-[24px] p-4"
      style={{
        background: colorBgContainer,
      }}
    >
      <Space>
        {hasBackButton ? (
          <Button
            type="text"
            icon={<ArrowRightOutlined />}
            onClick={() => router.push(getPreviousPageUrl(router.pathname))}
            size="small"
          >
            {t('dashboard-description-section.back')}
          </Button>
        ) : null}
      </Space>
      <Space direction="vertical">
        <h1 className="font-[700] text-[24px]">{title}</h1>
        <p className="font-[300] text-[16px]">{description}</p>
      </Space>
      <Space>{actionList}</Space>
    </Space>
  );
}
