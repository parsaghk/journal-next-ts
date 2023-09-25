import ReactQueryWrapper from '@components/ReactQueryWrapper';
import { useGetArticleList } from '@hooks/articles';
import DefaultLayout from '@layouts/DefaultLayout';
import { Col, List, Pagination, Row, Space, theme, Typography } from 'antd';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  JsonParam,
  NumericObjectParam,
  ObjectParam,
  useQueryParams,
  withDefault,
} from 'use-query-params';

export default function ArticleList() {
  const {
    token: { colorBgContainer, colorPrimary },
  } = theme.useToken();
  // const { t } = useTranslation();
  const [] = useQueryParams(
    {
      filters: withDefault(JsonParam, undefined),
      sorts: withDefault(ObjectParam, undefined),
      pagination: withDefault(NumericObjectParam, undefined),
    },
    {
      removeDefaultsFromUrl: false,
    }
  );
  const { status: getArticleListStatus, data: articleListResponse } =
    useGetArticleList({});

  return (
    <>
      <Row className="mb-4" justify="center">
        <Col span={20}>
          <Space direction="vertical" className="w-full">
            <ReactQueryWrapper status={getArticleListStatus}>
              <Typography.Title>Newest Articles</Typography.Title>
              <List
                className="p-4"
                style={{ backgroundColor: colorBgContainer }}
                itemLayout="vertical"
                dataSource={articleListResponse?.data}
                renderItem={(article) => {
                  return (
                    <List.Item
                      actions={[
                        <Link
                          style={{ color: colorPrimary }}
                          key="more-link"
                          href={`/articles/${article.id}`}
                        >
                          click here to read the article
                        </Link>,
                      ]}
                    >
                      <List.Item.Meta
                        title={
                          <Link href={`/articles/${article.id}`}>
                            {article.subject}
                          </Link>
                        }
                        description={article.shortDescription}
                      />
                    </List.Item>
                  );
                }}
              />
            </ReactQueryWrapper>
          </Space>
        </Col>
      </Row>
      <Row justify="center">
        <ReactQueryWrapper status={getArticleListStatus}>
          <Pagination
            className="rounded p-2"
            total={articleListResponse?.meta.itemCount}
            current={articleListResponse?.meta.page}
            pageSize={articleListResponse?.meta.take}
            style={{ backgroundColor: colorBgContainer }}
          />
        </ReactQueryWrapper>
      </Row>
    </>
  );
}

ArticleList.getLayout = DefaultLayout;

export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props.locale as string, ['common'])),
    },
  };
};
