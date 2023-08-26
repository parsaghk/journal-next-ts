import Navbar from '@components/Navbar';
import { Layout } from 'antd';
import { TDefaultLayout } from './types';

function DashboardLayout({ children }: TDefaultLayout) {
  return (
    <Layout className="min-h-screen">
      <Navbar />
      <Layout className="site-layout">
        <Layout className="h-full p-[24px]">{children}</Layout>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
