import ReactQueryWrapper from '@components/ReactQueryWrapper';
import { useGetArticleList } from '@hooks/articles';
import DefaultLayout from '@layouts/DefaultLayout';
import { SortEnum } from '@shared/enums';
import {
  Button,
  Carousel,
  Col,
  List,
  Row,
  Space,
  theme,
  Typography,
} from 'antd';
import type { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

export default function Home() {
  const { t } = useTranslation();
  const {
    token: { colorBgContainer, colorPrimary },
  } = theme.useToken();
  const { status: getArticleListStatus, data: articleListResponse } =
    useGetArticleList({
      pagination: { pageIndex: 1, pageSize: 6 },
      sorts: { createdAt: SortEnum.DESC },
    });

  const carouselItemList = React.Children.toArray(
    Array.from({ length: 5 }, (_, index) => {
      return (
        <div className="relative w-full h-[50vh] flex justify-center items-center">
          <Image
            className="object-contain"
            fill
            src={`https://picsum.photos/id/${index + 1}/1920/720`}
            alt="carousel"
          />
        </div>
      );
    })
  );
  return (
    <React.Fragment>
      <Row justify="center" className="mb-4">
        <Col span={20}>
          <Carousel swipeToSlide draggable className="cursor-grab">
            {carouselItemList}
          </Carousel>
        </Col>
        {/* <List.Item.Meta>
          
        </List.Item.Meta> */}
      </Row>
      <Row justify="center">
        <Col span={20}>
          <Space direction="vertical" className="w-full">
            <Space
              className="p-4 flex justify-between"
              style={{ backgroundColor: colorBgContainer }}
            >
              <Typography.Title>{t('home.newest-articles')}</Typography.Title>
              <Button
                className="flex items-baseline gap-2"
                type="primary"
                ghost
              >
                <Link href="/articles">{t('home.more-articles')}</Link>
              </Button>
            </Space>
            <ReactQueryWrapper status={getArticleListStatus}>
              <List
                className="p-4"
                style={{ backgroundColor: colorBgContainer }}
                itemLayout="vertical"
                // dataSource={articleListResponse?.data}
                dataSource={articleListResponse?.data}
                renderItem={(article) => {
                  return (
                    <List.Item
                      actions={[
                        <Link
                          style={{ color: colorPrimary }}
                          key="more-link"
                          href={`/articles/${article?.id}`}
                        >
                          click here to read the article
                        </Link>,
                      ]}
                    >
                      <List.Item.Meta
                        title={
                          <Link href={`/articles/${article?.id}`}>
                            {article?.subject}
                          </Link>
                        }
                        description={article?.shortDescription}
                      />
                    </List.Item>
                  );
                }}
              />
            </ReactQueryWrapper>
          </Space>
        </Col>
      </Row>
    </React.Fragment>
  );
}

Home.getLayout = DefaultLayout;

export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props.locale as string, ['common'])),
    },
  };
};
