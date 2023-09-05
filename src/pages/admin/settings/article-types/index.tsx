import { TArticleType } from '@api/article-types';
import DashboardDescriptionSection from '@components/DashboardDescriptionSection';
import ReactQueryWrapper from '@components/ReactQueryWrapper';
import Table from '@components/Table';
import { useGetArticleTypeList } from '@hooks/article-types';
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

function ArticleTypesPage() {
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
  const { status, data } = useGetArticleTypeList({
    pagination: query.pagination as TPagination,
  });
  const columnList: TableProps<TArticleType>['columns'] = [
    {
      title: t('article-types-view.table.title'),
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: t('article-types-view.table.actions'),
      width: 300,
      key: 'action',
      align: 'center',
      render: (_, { id }) => (
        <Space size="middle">
          <Link href={`article-types/${id}/edit`}>
            <Button type="link">{t('article-types-view.table.edit')}</Button>
          </Link>
        </Space>
      ),
    },
  ];
  return (
    <React.Fragment>
      <DashboardDescriptionSection
        title={t('article-types-view.title')}
        description={t('article-types-view.description')}
        actionList={
          <Link href="article-types/add">
            <Button type="primary">{t('article-types-view.add')}</Button>
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

ArticleTypesPage.getLayout = DashboardLayout;

export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props.locale as string, ['common'])),
    },
  };
};

export default ArticleTypesPage;
