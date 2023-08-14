import DashboardHeader from '@components/DashboardHeader';
import Sidebar from '@components/Sidebar';
import { Layout } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { TDashboardLayout } from './types';

function getSelectedKeys(pathname: string): string[] {
  const pathList: string[] = pathname.match(/([^/]+)/g) ?? [];
  pathList.shift();
  return pathList;
}

function DashboardLayout({ children }: TDashboardLayout) {
  const router = useRouter();
  const pathList = getSelectedKeys(router.pathname);
  return (
    <Layout className="min-h-screen">
      <Sidebar selectedKeyList={pathList} />
      <Layout className="site-layout">
        <DashboardHeader
          adminFullName="Parsa"
          onLogoutButtonClick={console.log}
        />
        <Layout className="h-full p-[24px]">{children}</Layout>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
