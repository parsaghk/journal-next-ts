import '@styles/globals.scss';
import { TDashboardLayout } from '@layouts/DashboardLayout';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider, notification } from 'antd';
import { Locale } from 'antd/lib/locale';
import enUS from 'antd/locale/en_US';
import faIR from 'antd/locale/fa_IR';
import frFR from 'antd/locale/fr_FR';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { appWithTranslation, i18n } from 'next-i18next';
import NextAdapterPages from 'next-query-params/pages';
import queryString from 'query-string';
import React from 'react';
import { QueryParamProvider } from 'use-query-params';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (props: TDashboardLayout) => React.JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const appLocaleToAntDesignLocaleMapper = new Map<string, Locale>([
  ['fa', faIR],
  ['en', enUS],
  ['fr', frFR],
]);

function App({ Component, pageProps, router }: AppPropsWithLayout) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          mutations: {
            onSuccess: () => {
              notification.success({
                message: 'Operation completed successfully',
                placement: 'bottomRight',
              });
              router.back();
            },
          },
        },
      })
  );

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
        <ConfigProvider
          direction={i18n?.dir(router.locale)}
          locale={appLocaleToAntDesignLocaleMapper.get(router.locale as string)}
        >
          <QueryParamProvider
            adapter={NextAdapterPages}
            options={{
              searchStringToObject: queryString.parse,
              objectToSearchString: queryString.stringify,
            }}
          >
            <Page />
          </QueryParamProvider>
        </ConfigProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default appWithTranslation(App);
