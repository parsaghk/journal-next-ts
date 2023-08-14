import { PoweroffOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Layout, Space, theme, Typography } from 'antd';
import React from 'react';
import { TDashboardHeader } from './types';

const DashboardHeader: React.FC<TDashboardHeader> = ({
  adminFullName,
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
          <Typography.Text style={{ color: colorTextLightSolid }}>
            {adminFullName}
          </Typography.Text>
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
