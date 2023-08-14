import '@styles/globals.scss';
import { TDashboardLayout } from '@layouts/DashboardLayout';
import { ConfigProvider } from 'antd';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import React from 'react';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (props: TDashboardLayout) => React.JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const PageLayout = Component.getLayout;
  if (!PageLayout) return <Component {...pageProps} />;

  return (
    <ConfigProvider>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ConfigProvider>
  );
}

export default appWithTranslation(App);
