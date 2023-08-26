import '@styles/globals.scss';
import { TDashboardLayout } from '@layouts/DashboardLayout';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
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
  const [queryClient] = React.useState(() => new QueryClient());
  const PageLayout = Component.getLayout;
  const Page = () =>
    PageLayout ? (
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    ) : (
      <Component {...pageProps} />
    );
  // if (!PageLayout) return <Component {...pageProps} />;
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ConfigProvider>
          <Page />
        </ConfigProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default appWithTranslation(App);
