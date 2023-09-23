import {
  AppstoreOutlined,
  FileTextOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

function getSelectedKeys(asPath: string): string[] {
  const pathList: string[] = asPath.match(/([^/]+)/g) ?? [];
  pathList.shift();
  return pathList;
}

const Sidebar = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const sidebarItemList: MenuProps['items'] = [
    {
      key: 'dashboard',
      label: <Link href="/admin/dashboard">{t('sidebar.dashboard')}</Link>,
      icon: <AppstoreOutlined />,
    },
    {
      key: 'articles',
      label: <Link href="/admin/articles">{t('sidebar.articles')}</Link>,
      icon: <FileTextOutlined />,
    },
    {
      key: 'settings',
      label: t('sidebar.settings'),
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
          key: 'article-file-types',
          label: (
            <Link href="/admin/settings/article-file-types">
              {t('sidebar.article-file-types')}
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
        {
          key: 'questions',
          label: (
            <Link href="/admin/settings/questions">
              {t('sidebar.questions')}
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
        defaultOpenKeys={getSelectedKeys(router.asPath)}
        selectedKeys={getSelectedKeys(router.asPath)}
        items={sidebarItemList}
      />
    </Layout.Sider>
  );
};

export default Sidebar;
