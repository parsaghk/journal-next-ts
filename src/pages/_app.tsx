import '@styles/globals.scss';
import { TDashboardLayout } from '@layouts/DashboardLayout';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
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
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
function App({ Component, pageProps }: AppPropsWithLayout) {
  const PageLayout = Component.getLayout;
  if (!PageLayout) return <Component {...pageProps} />;
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ConfigProvider>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </ConfigProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default appWithTranslation(App);
