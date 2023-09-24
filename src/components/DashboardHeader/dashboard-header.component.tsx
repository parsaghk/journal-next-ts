import { PoweroffOutlined, UserOutlined } from '@ant-design/icons';
import Hydration from '@components/Hydration';
import LanguageDropdown from '@components/LanguageDropdown';
import RoleDropdown from '@components/RoleDropdown';
import { RoleEnum } from '@shared/enums';
import {
  Avatar,
  Button,
  Col,
  Layout,
  Row,
  Space,
  theme,
  Typography,
} from 'antd';
import React from 'react';
import { TDashboardHeader } from './types';

const DashboardHeader: React.FC<TDashboardHeader> = ({
  userSummary,
  currentRole,
  onLogoutButtonClick,
  roleDropdownOnClick,
}) => {
  const {
    token: { colorPrimary, colorTextLightSolid },
  } = theme.useToken();
  return (
    <Layout.Header>
      <Row className="h-full" justify="space-between" align="middle">
        <Col span={2}>
          <Hydration>
            <RoleDropdown
              userRoleList={userSummary?.roleList as RoleEnum[]}
              onClickDropdownItem={roleDropdownOnClick}
              activeRole={currentRole}
            />
          </Hydration>
        </Col>
        <Col span={2}>
          <LanguageDropdown />
        </Col>
        <Col>
          <Row gutter={13}>
            <Col>
              <Space className="flex gap-1">
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
            </Col>
            <Col>
              <Button
                type="default"
                size="middle"
                onClick={onLogoutButtonClick}
                icon={<PoweroffOutlined />}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default DashboardHeader;
