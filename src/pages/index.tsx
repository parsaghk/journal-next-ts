import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <p />
      <p>{t('example')}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (props) => {
  console.log(props);
  return {
    props: {
      ...(await serverSideTranslations(props.locale as string, ['common'])),
    },
  };
};
