import type { DocumentContext } from 'next/document';
import { Html, Head, Main, NextScript } from 'next/document';
import i18n from 'i18next';

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
