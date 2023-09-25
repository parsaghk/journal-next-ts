import DashboardLayout from '@layouts/DashboardLayout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

function Dashboard() {
  return <div>Dashboard</div>;
}

Dashboard.getLayout = DashboardLayout;
export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props.locale as string, ['common'])),
    },
  };
};

export default Dashboard;
