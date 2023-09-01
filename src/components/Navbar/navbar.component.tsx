import { GlobalOutlined, UserOutlined } from '@ant-design/icons';
import Hydration from '@components/Hydration';
import { localeToLanguageDataMapper } from '@shared/constants';
import { Button, Dropdown, Layout, Menu, MenuProps, Space, theme } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { TNavbar } from './types';

export default function Navbar({ onLogout, userSummary }: TNavbar) {
  console.log({ userSummary });
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const dir = i18n.dir(i18n.language);
  React.useEffect(() => {
    document.body.dir = dir;
  }, [dir]);
  const dropDownItemList: MenuProps['items'] = [];
  localeToLanguageDataMapper.forEach((value, key) => {
    dropDownItemList.push({
      key,
      label: (
        <Link href={router.pathname} locale={key}>
          <Space>
            {value.flag}
            {value.language}
          </Space>
        </Link>
      ),
    });
  });
  const menuItemList: MenuProps['items'] = [
    {
      key: 'home',
      label: <Link href="/">{t('navbar.home')}</Link>,
    },
    {
      key: 'categories',
      label: <Link href="/categories">{t('navbar.categories')}</Link>,
    },
    {
      key: 'about-us',
      label: <Link href="/about-us">{t('navbar.about-us')}</Link>,
    },
  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout.Header
      className="flex justify-between items-center shadow-md"
      style={{ backgroundColor: colorBgContainer }}
    >
      <Space>
        <Image src="/logo.svg" width={40} height={40} alt="logo" />
        <Menu
          mode="horizontal"
          className="w-80"
          // selectedKeys={}
          items={menuItemList}
        />
      </Space>
      <Space>
        <Dropdown menu={{ items: dropDownItemList }}>
          <Space>
            {localeToLanguageDataMapper.get(i18n.language)?.flag}
            {localeToLanguageDataMapper.get(i18n.language)?.language}
            <GlobalOutlined />
          </Space>
        </Dropdown>
        <Hydration>
          {userSummary ? (
            <Dropdown
              menu={{
                items: [
                  {
                    key: 1,
                    label: (
                      <Link href="/admin/dashboard">
                        {t('navbar.dashboard')}
                      </Link>
                    ),
                  },
                  {
                    key: 2,
                    onClick: onLogout,
                    label: t('navbar.logout'),
                    // <Link href="/admin/dashboard">{t('login.dashboard')}</Link>
                  },
                ],
              }}
            >
              <Button icon={<UserOutlined />} />
            </Dropdown>
          ) : (
            <Space>
              <Button onClick={() => router.push('/auth/login')}>
                {t('navbar.login')}
              </Button>
              <Button
                onClick={() => router.push('/auth/register')}
                type="primary"
              >
                {t('navbar.register')}
              </Button>
            </Space>
          )}
        </Hydration>
      </Space>
    </Layout.Header>
  );
}
