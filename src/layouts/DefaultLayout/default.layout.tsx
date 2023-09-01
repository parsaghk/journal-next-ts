import Navbar from '@components/Navbar';
import { useLogout } from '@hooks/auth';
import { useUserInfoStore } from '@store/user-info';
import { Layout } from 'antd';
import { TDefaultLayout } from './types';

function DefaultLayout({ children }: TDefaultLayout) {
  const { mutate: logout } = useLogout();
  const user = useUserInfoStore((state) => state.user);
  user?.firstName;
  return (
    <Layout className="min-h-screen">
      <Navbar
        onLogout={() => {
          logout();
        }}
        userSummary={user}
      />
      <Layout className="site-layout">
        <Layout className="h-full p-[24px]">{children}</Layout>
      </Layout>
    </Layout>
  );
}

export default DefaultLayout;
