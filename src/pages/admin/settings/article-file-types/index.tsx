import { TGetArticleFileTypeListResponse } from '@api/article-file-types';
import DashboardDescriptionSection from '@components/DashboardDescriptionSection';
import ReactQueryWrapper from '@components/ReactQueryWrapper';
import Table from '@components/Table';
import { useGetArticleFileTypeList } from '@hooks/article-file-types';
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

function ArticleFileTypesPage() {
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
  const { status, data } = useGetArticleFileTypeList({
    pagination: query.pagination as TPagination,
  });
  const columnList: TableProps<TGetArticleFileTypeListResponse>['columns'] = [
    {
      title: t('article-file-types-view.table.title'),
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: t('article-file-types-view.table.actions'),
      width: 300,
      key: 'action',
      align: 'center',
      render: (_, { id }) => (
        <Space size="middle">
          <Link href={`article-file-types/${id}/edit`}>
            <Button type="link">
              {t('article-file-types-view.table.edit')}
            </Button>
          </Link>
        </Space>
      ),
    },
  ];
  return (
    <React.Fragment>
      <DashboardDescriptionSection
        title={t('article-file-types-view.title')}
        description={t('article-file-types-view.description')}
        actionList={
          <Link href="article-file-types/add">
            <Button type="primary">{t('article-file-types-view.add')}</Button>
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

ArticleFileTypesPage.getLayout = DashboardLayout;

export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props.locale as string, ['common'])),
    },
  };
};

export default ArticleFileTypesPage;
