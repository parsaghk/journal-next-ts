import { TGetArticleListResponse } from '@api/articles';
import ArticleStatusBadge from '@components/ArticleStatusBadge';
import DashboardDescriptionSection from '@components/DashboardDescriptionSection';
import ReactQueryWrapper from '@components/ReactQueryWrapper';
import Table from '@components/Table';
import { useGetArticleList } from '@hooks/articles';
import DashboardLayout from '@layouts/DashboardLayout';
import { TPageMeta, TPagination } from '@shared/types';
import { Button, Space, TableProps } from 'antd';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import {
  JsonParam,
  NumericObjectParam,
  ObjectParam,
  useQueryParams,
  withDefault,
} from 'use-query-params';

function ArticlesPage() {
  const { t } = useTranslation();
  const [query, setQuery] = useQueryParams(
    {
      filters: withDefault(JsonParam, undefined),
      sorts: withDefault(ObjectParam, undefined),
      pagination: withDefault(NumericObjectParam, undefined),
    },
    {
      removeDefaultsFromUrl: false,
    }
  );
  const { status, data } = useGetArticleList({
    pagination: query.pagination as TPagination,
  });
  const columnList: TableProps<TGetArticleListResponse>['columns'] = [
    {
      title: t('articles-view.table.author'),
      dataIndex: 'owner',
      render: (_, { owner }) => {
        return `${owner.lastName}, ${owner.firstName}`;
      },
      key: 'owner',
    },
    {
      title: t('articles-view.table.status'),
      dataIndex: 'status',
      render: (_, { status }) => {
        return <ArticleStatusBadge status={status} />;
      },
    },
    {
      title: t('articles-view.table.actions'),
      width: 300,
      key: 'action',
      align: 'center',
      render: (_, { id }) => (
        <Space size="middle">
          <Link href={`articles/${id}`}>
            <Button type="primary">{t('articles-view.table.detail')}</Button>
          </Link>
          <Link href={`articles/${id}/edit`}>
            <Button type="link">{t('articles-view.table.edit')}</Button>
          </Link>
        </Space>
      ),
    },
  ];
  return (
    <React.Fragment>
      <DashboardDescriptionSection
        title={t('articles-view.title')}
        description={t('articles-view.description')}
        actionList={
          <Link href="articles/add">
            <Button type="primary">{t('articles-view.add')}</Button>
          </Link>
        }
      />
      <ReactQueryWrapper status={status}>
        <Table
          setQuery={setQuery}
          columns={columnList}
          dataSource={data?.data}
          paginationMetaData={data?.meta as TPageMeta}
          filters={query.filters}
          sorts={query.sorts}
        />
      </ReactQueryWrapper>
    </React.Fragment>
  );
}

ArticlesPage.getLayout = DashboardLayout;

export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props.locale as string, ['common'])),
    },
  };
};

export default ArticlesPage;
