import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from "next-i18next";
import {GetStaticProps} from "next";


export default function Home() {
  const {t} = useTranslation()
  return (
    <p>{t('example')}</p>
  )
}

export const getStaticProps: GetStaticProps = async (props) => {
  console.log(props)
  return {
    props: {
      ...(await serverSideTranslations(props.locale as string, [
        'common',
      ])),
      //   // Will be passed to the page component as props
    },
  }
}