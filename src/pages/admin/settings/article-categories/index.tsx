import { TArticleCategory } from '@api/article-categories';
import DashboardDescriptionSection from '@components/DashboardDescriptionSection';
import ReactQueryWrapper from '@components/ReactQueryWrapper';
import Table from '@components/Table';
import { useGetArticleCategoryList } from '@hooks/article-categories';
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

function ArticleCategoriesPage() {
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
  const { status, data } = useGetArticleCategoryList({
    pagination: query.pagination as TPagination,
  });
  const columnList: TableProps<TArticleCategory>['columns'] = [
    {
      title: t('article-categories-view.table.title'),
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: t('article-categories-view.table.actions'),
      width: 300,
      key: 'action',
      align: 'center',
      render: (_, { id }) => (
        <Space size="middle">
          <Link href={`article-categories/${id}/edit`}>
            <Button type="link">
              {t('article-categories-view.table.edit')}
            </Button>
          </Link>
        </Space>
      ),
    },
  ];
  return (
    <React.Fragment>
      <DashboardDescriptionSection
        title={t('article-categories-view.title')}
        description={t('article-categories-view.description')}
        actionList={
          <Link href="article-categories/add">
            <Button type="primary">{t('article-categories-view.add')}</Button>
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

ArticleCategoriesPage.getLayout = DashboardLayout;

export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props.locale as string, ['common'])),
    },
  };
};

export default ArticleCategoriesPage;
