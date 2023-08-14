import {
  AppstoreOutlined,
  FileTextOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { TSidebar } from './types';

const Sidebar: React.FC<TSidebar> = ({ selectedKeyList }) => {
  const { t } = useTranslation();
  const sidebarItemList: MenuProps['items'] = [
    {
      key: 'dashboard',
      label: <Link href="/admin/dashboard">{t('sidebar.users')}</Link>,
      icon: <AppstoreOutlined />,
    },
    {
      key: 'articles',
      label: t('sidebar.articles'),
      icon: <FileTextOutlined />,
    },
    {
      key: 'users-management',
      label: t('sidebar.users-management'),
      icon: <UserOutlined />,
      children: [
        {
          key: 'users',
          label: (
            <Link href="/admin/users-management/users">
              {t('sidebar.users')}
            </Link>
          ),
        },
        {
          key: 'roles',
          label: (
            <Link href="/admin/users-management/roles">
              {t('sidebar.roles')}
            </Link>
          ),
        },
        {
          key: 'permissions',
          label: (
            <Link href="/admin/users-management/permissions">
              {t('sidebar.permissions')}
            </Link>
          ),
        },
      ],
    },
    {
      key: 'settings',
      label: <Link href="/admin/settings">{t('sidebar.settings')}</Link>,
      icon: <SettingOutlined />,
      children: [
        {
          key: 'article-types',
          label: (
            <Link href="/admin/settings/article-types">
              {t('sidebar.article-types')}
            </Link>
          ),
        },
        {
          key: 'article-categories',
          label: (
            <Link href="/admin/settings/article-categories">
              {t('sidebar.article-categories')}
            </Link>
          ),
        },
      ],
    },
  ];

  return (
    <Layout.Sider
      theme="dark"
      collapsible={true}
      width={200}
      style={{
        height: '100vh',
        zIndex: 12,
        overflow: 'auto',
        position: 'sticky',
        top: 0,
        right: 0,
      }}
    >
      {/*<div className="w-1/3 m-auto mt-4 mb-4">*/}
      {/*  <Image className="rounded-full" src="/logo.jpg" alt="dentoos" />*/}
      {/*</div>*/}
      <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={selectedKeyList}
        selectedKeys={selectedKeyList}
        items={sidebarItemList}
      />
    </Layout.Sider>
  );
};

export default Sidebar;
