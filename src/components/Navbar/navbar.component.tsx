import { GlobalOutlined } from '@ant-design/icons';
import { localeToLanguageDataMapper } from '@shared/constants';
import { Button, Dropdown, Layout, Menu, MenuProps, Space, theme } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

export default function Navbar() {
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
          <Space
          // onClick={() => {
          //   i18n.changeLanguage(key);
          //   router.push(
          //     { pathname: router.pathname, query: router.query },
          //     router.asPath,
          //     { locale: key }
          //   );
          // }}
          >
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
        <Button onClick={() => router.push('/auth/login')}>
          {t('navbar.login')}
        </Button>
        <Button onClick={() => router.push('/auth/register')} type="primary">
          {t('navbar.register')}
        </Button>
      </Space>
    </Layout.Header>
    // <Space className="w-full justify-between p-4 shadow-lg">
    //   <Space className="gap-16">
    //     <Space>
    //       <Typography>{t('navbar.home')}</Typography>
    //       <Typography>{t('navbar.categories')}</Typography>
    //       <Typography>{t('navbar.about-us')}</Typography>
    //     </Space>
    //   </Space>
    //   <Space>
    //     <Button>{t('navbar.login')}</Button>
    //     <Button type="primary">{t('navbar.register')}</Button>
    //   </Space>
    // </Space>
  );
}
