import { PoweroffOutlined, UserOutlined } from '@ant-design/icons';
import Hydration from '@components/Hydration';
import { Avatar, Button, Layout, Space, theme, Typography } from 'antd';
import React from 'react';
import { TDashboardHeader } from './types';

const DashboardHeader: React.FC<TDashboardHeader> = ({
  userSummary,
  onLogoutButtonClick,
}) => {
  const {
    token: { colorPrimary, colorTextLightSolid },
  } = theme.useToken();
  return (
    <Layout.Header className="flex justify-end">
      <Space size={16}>
        <Space size={8}>
          <Avatar
            style={{ backgroundColor: colorPrimary }}
            icon={<UserOutlined />}
          />
          <Hydration>
            <Typography.Text style={{ color: colorTextLightSolid }}>
              {userSummary?.firstName} {userSummary?.lastName}
            </Typography.Text>
          </Hydration>
        </Space>
        <Button
          type="default"
          size="middle"
          onClick={onLogoutButtonClick}
          icon={<PoweroffOutlined />}
        />
      </Space>
    </Layout.Header>
  );
};

export default DashboardHeader;
