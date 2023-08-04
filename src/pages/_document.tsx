import i18n from 'i18next';
import type { DocumentContext } from 'next/document';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document({ locale }: DocumentContext) {
  return (
    <Html dir={i18n.dir(locale)}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
