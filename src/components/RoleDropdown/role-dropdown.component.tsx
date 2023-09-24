import { DownOutlined } from '@ant-design/icons';
import { RoleConstant } from '@constants/role.constant';
import { Button, Dropdown, Space } from 'antd';
import React from 'react';
import { TRoleDropdownProps } from './types';

export default function RoleDropdown({
  activeRole,
  userRoleList,
  onClickDropdownItem,
}: TRoleDropdownProps) {
  return (
    <Dropdown
      menu={{
        items: userRoleList.map((role, index) => ({
          key: index,
          label: RoleConstant(role),
          onClick: () => {
            onClickDropdownItem(role);
          },
        })),
      }}
    >
      <Button>
        <Space>
          <DownOutlined />
          {RoleConstant(activeRole)}
        </Space>
      </Button>
    </Dropdown>
  );
}
