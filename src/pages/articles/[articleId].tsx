import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import ReactQueryWrapper from '@components/ReactQueryWrapper';
import { useGetSingleArticle } from '@hooks/articles';
import DefaultLayout from '@layouts/DefaultLayout';
import { TEntityId } from '@shared/types';
import { Button, Descriptions, Table, theme, Typography } from 'antd';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

export default function ArticleDetail() {
  const {
    token: { colorBgContainer, colorInfoText, colorInfoBg },
  } = theme.useToken();
  const { t } = useTranslation();
  const router = useRouter();
  const { articleId } = router.query;
  const { status: getSingleArticleStatus, data: article } = useGetSingleArticle(
    articleId as TEntityId
  );
  return (
    <ReactQueryWrapper status={getSingleArticleStatus}>
      <Descriptions
        title={t('article-detail.general-information')}
        className="p-4 mb-4"
        layout="vertical"
        style={{ backgroundColor: colorBgContainer }}
        items={[
          {
            key: 1,
            label: t('article-detail.subject'),
            children: article?.subject,
            span: 1,
          },
          {
            key: 4,
            label: t('article-detail.article-type'),
            children: article?.type.title,
          },
          {
            key: 5,
            label: t('article-detail.article-category'),
            children: article?.category.title,
            span: 1,
          },

          {
            key: 3,
            label: t('article-detail.short-description'),
            children: article?.shortDescription ?? '-',
            span: 3,
          },

          {
            key: 3,
            label: t('article-detail.conflict-of-interest'),
            children: article?.conflictOfInterest ?? '-',
            span: 3,
          },
          {
            key: 3,
            label: t('article-detail.competing-interest-statement'),
            children: article?.competingInterestStatement ?? '-',
            span: 3,
          },
          {
            key: 6,
            contentStyle: { display: 'flex', flexWrap: 'wrap', gap: 8 },
            label: t('article-detail.keywords'),
            children: React.Children.toArray(
              article?.keywordList.map((keyword) => (
                <Typography.Text
                  className="rounded px-2 py-1 mr-1"
                  style={{
                    backgroundColor: colorInfoBg,
                    color: colorInfoText,
                  }}
                >
                  {keyword}
                </Typography.Text>
              ))
            ),
          },
        ]}
      />
      <Descriptions
        title={t('article-detail.manuscript-information')}
        className="p-4 mb-4"
        style={{ backgroundColor: colorBgContainer }}
        items={[
          {
            key: 5,
            label: t('article-detail.title'),
            children: (
              <div
                dangerouslySetInnerHTML={{ __html: article?.title as string }}
              />
            ),
            span: 3,
          },
          {
            key: 6,
            label: t('article-detail.abstract'),
            children: (
              <div
                dangerouslySetInnerHTML={{
                  __html: article?.abstract as string,
                }}
              />
            ),
            span: 3,
          },
        ]}
        layout="vertical"
      />
      <Descriptions
        layout="vertical"
        className="p-4 mb-4"
        style={{ backgroundColor: colorBgContainer }}
        title={t('article-detail.personal-information')}
        items={[
          {
            key: 1,
            label: t('article-detail.first-name'),
            children: article?.owner.firstName,
          },
          {
            key: 2,
            label: t('article-detail.middle-name'),
            children: article?.owner.middleName ?? '-',
          },
          {
            key: 3,
            label: t('article-detail.last-name'),
            children: article?.owner.lastName,
          },
          {
            key: 1,
            label: t('article-detail.email'),
            children: article?.owner.email,
          },
          {
            key: 1,
            label: t('article-detail.position'),
            children: article?.owner.position ?? '-',
          },
          {
            key: 1,
            label: t('article-detail.institution'),
            children: article?.owner.institution ?? '-',
          },
          {
            key: 1,
            label: t('article-detail.department'),
            children: article?.owner.department ?? '-',
          },
        ]}
      />
      <Descriptions
        title={t('article-detail.attachments.header')}
        className="p-4 mb-4"
        style={{ backgroundColor: colorBgContainer }}
        items={[
          {
            key: 1,
            contentStyle: { width: '100%' },
            span: 3,
            children: (
              <Table
                className="w-full"
                pagination={false}
                dataSource={article?.fileList}
                columns={[
                  {
                    title: t('article-detail.attachments.row-number'),
                    render: (_, __, index) => index + 1,
                  },
                  {
                    title: t('article-detail.attachments.description'),
                    dataIndex: 'description',
                  },
                  {
                    title: t('article-detail.attachments.type'),
                    dataIndex: ['type', 'title'],
                  },
                  {
                    title: t('article-detail.attachments.actions'),
                    width: 3,
                    render: (_, record) => {
                      return (
                        <>
                          <Link
                            href={`/admin/file/${record.storage.id}`}
                            target="_blank"
                          >
                            <Button type="link">
                              {t('article-detail.attachments.preview')}
                            </Button>
                          </Link>
                        </>
                      );
                    },
                  },
                ]}
              />
            ),
          },
        ]}
      />
    </ReactQueryWrapper>
  );
}

ArticleDetail.getLayout = DefaultLayout;

export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props.locale as string, ['common'])),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
