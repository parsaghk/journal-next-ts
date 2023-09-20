import DashboardHeader from '@components/DashboardHeader';
import Sidebar from '@components/Sidebar';
import { useLogout } from '@hooks/auth';
import { RoleEnum } from '@shared/enums';
import { useUserInfoStore } from '@store/user-info';
import { Layout } from 'antd';
import { TDashboardLayout } from './types';

function DashboardLayout({ children }: TDashboardLayout) {
  const { user, currentRole, setCurrentUserRole } = useUserInfoStore(
    (state) => state
  );
  const { mutate: logout } = useLogout();
  return (
    <Layout className="min-h-screen">
      <Sidebar />

      <Layout className="site-layout">
        <DashboardHeader
          roleDropdownOnClick={(role) => setCurrentUserRole(role)}
          onLogoutButtonClick={logout}
          userSummary={user}
          currentRole={currentRole as RoleEnum}
        />
        <Layout className="h-full p-[24px]">{children}</Layout>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
