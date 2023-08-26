import DashboardHeader from '@components/DashboardHeader';
import Sidebar from '@components/Sidebar';
import { Layout } from 'antd';
import { TDashboardLayout } from './types';

function DashboardLayout({ children }: TDashboardLayout) {
  return (
    <Layout className="min-h-screen">
      <Sidebar />
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
