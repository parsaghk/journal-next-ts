import { TGetQuestionListResponse } from '@api/questions';
import DashboardDescriptionSection from '@components/DashboardDescriptionSection';
import ReactQueryWrapper from '@components/ReactQueryWrapper';
import Table from '@components/Table';
import { useGetQuestionList } from '@hooks/questions';
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

function QuestionsPage() {
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
  const { status, data } = useGetQuestionList({
    pagination: query.pagination as TPagination,
  });
  const columnList: TableProps<TGetQuestionListResponse>['columns'] = [
    {
      title: t('questions-view.table.content'),
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: t('questions-view.table.type'),
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: t('questions-view.table.actions'),
      width: 300,
      key: 'action',
      align: 'center',
      render: (_, { id }) => (
        <Space size="middle">
          <Link href={`questions/${id}/edit`}>
            <Button type="link">{t('questions-view.table.edit')}</Button>
          </Link>
        </Space>
      ),
    },
  ];
  return (
    <React.Fragment>
      <DashboardDescriptionSection
        title={t('questions-view.title')}
        description={t('questions-view.description')}
        actionList={
          <Link href="questions/add">
            <Button type="primary">{t('questions-view.add')}</Button>
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

QuestionsPage.getLayout = DashboardLayout;

export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props.locale as string, ['common'])),
    },
  };
};

export default QuestionsPage;
