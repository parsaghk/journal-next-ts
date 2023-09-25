import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import ArticleStatusBadge from '@components/ArticleStatusBadge';
import DashboardDescriptionSection from '@components/DashboardDescriptionSection';
import ProcessArticleModal from '@components/ProcessArticleModal';
import ReactQueryWrapper from '@components/ReactQueryWrapper';
import RejectArticleModal from '@components/RejectArticleModal';
import RoleBadge from '@components/RoleBadge';
import {
  useAcceptArticleByEditor,
  useAcceptArticleByJuror,
  useGetSingleArticle,
  useProcessArticle,
  usePublishArticle,
  useRejectArticleByEditor,
  useRejectArticleByJuror,
} from '@hooks/articles';
import { useGetAllEditorList, useGetAllJurorList } from '@hooks/users';
import DashboardLayout from '@layouts/DashboardLayout';
import { ArticleStatusEnum, RoleEnum } from '@shared/enums';
import { TEntityId } from '@shared/types';
import { useUserInfoStore } from '@store/user-info';
import { normalizeDate } from '@utils/date.util';
import {
  Button,
  Col,
  Descriptions,
  Modal,
  Row,
  Space,
  Table,
  theme,
  Typography,
} from 'antd';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

function ArticleDetailPage() {
  const { t } = useTranslation();
  const {
    token: { colorBgContainer, colorInfoBg, colorInfoText },
  } = theme.useToken();
  const currentRole = useUserInfoStore((state) => state.currentRole);
  const [isProcessArticleModalOpen, setIsProcessArticleModalOpen] =
    React.useState(false);
  const [isRejectArticleModalOpen, setIsRejectArticleModalOpen] =
    React.useState(false);
  const router = useRouter();
  const { articleId } = router.query;
  const { status: getSingleArticleStatus, data: article } = useGetSingleArticle(
    articleId as TEntityId
  );
  const { status: getAllJurorListStatus, data: jurorList } =
    useGetAllJurorList();
  const { status: getAllEditorListStatus, data: editorList } =
    useGetAllEditorList();
  const { mutate: processArticle } = useProcessArticle(articleId as TEntityId);
  const { mutate: rejectArticleByEditor } = useRejectArticleByEditor(
    articleId as TEntityId
  );
  const { mutate: rejectArticleByJuror } = useRejectArticleByJuror(
    articleId as TEntityId
  );
  const { mutate: acceptArticleByEditor } = useAcceptArticleByEditor(
    articleId as TEntityId
  );
  const { mutate: acceptArticleByJuror } = useAcceptArticleByJuror(
    articleId as TEntityId
  );
  const { mutate: publishArticle } = usePublishArticle(articleId as TEntityId);

  const areButtonsForJurorOrEditorEnable =
    (article?.status === ArticleStatusEnum.JUDGING &&
      currentRole === RoleEnum.JUROR) ||
    (article?.status === ArticleStatusEnum.EDITING &&
      currentRole === RoleEnum.EDITOR);
  return (
    <ReactQueryWrapper
      status={
        getSingleArticleStatus &&
        getAllJurorListStatus &&
        getAllEditorListStatus
      }
    >
      <DashboardDescriptionSection
        title={t('article-detail.description-section.title')}
        description={t('article-detail.description-section.description')}
        hasBackButton
        actionList={
          <Space direction="vertical">
            {currentRole === RoleEnum.MANAGER ? (
              <Space>
                <Button
                  type="primary"
                  disabled={article?.status !== ArticleStatusEnum.PROCESSING}
                  onClick={() => setIsProcessArticleModalOpen(true)}
                >
                  {t('article-detail.description-section.actions.process')}
                </Button>
                <Button
                  type="primary"
                  disabled={article?.status !== ArticleStatusEnum.FINALIZING}
                  onClick={() => {
                    Modal.confirm({
                      title: t(
                        'article-detail.description-section.actions.publish-modal.title'
                      ),
                      content: t(
                        'article-detail.description-section.actions.publish-modal.content'
                      ),
                      onOk: () => {
                        publishArticle();
                      },
                    });
                  }}
                >
                  {t('article-detail.description-section.actions.publish')}
                </Button>
              </Space>
            ) : null}
            {[RoleEnum.JUROR, RoleEnum.EDITOR].includes(
              currentRole as RoleEnum
            ) ? (
              <Space>
                <Button
                  disabled={!areButtonsForJurorOrEditorEnable}
                  type="primary"
                  onClick={() => {
                    Modal.confirm({
                      title: t(
                        'article-detail.description-section.actions.accept-modal.title'
                      ),
                      content: t(
                        'article-detail.description-section.actions.publish-modal.content'
                      ),
                      onOk: () => {
                        if (currentRole === RoleEnum.EDITOR) {
                          acceptArticleByEditor();
                        }

                        if (currentRole === RoleEnum.JUROR) {
                          acceptArticleByJuror();
                        }
                      },
                    });
                  }}
                >
                  {t('article-detail.description-section.actions.accept')}
                </Button>
                <Button
                  danger
                  disabled={!areButtonsForJurorOrEditorEnable}
                  onClick={() => {
                    setIsRejectArticleModalOpen(true);
                  }}
                >
                  {t('article-detail.description-section.actions.reject')}
                </Button>
              </Space>
            ) : null}
          </Space>
        }
      />
      <ProcessArticleModal
        editorList={editorList!}
        jurorList={jurorList!}
        open={isProcessArticleModalOpen}
        onSubmit={(inputs) => {
          processArticle(inputs);
        }}
        onCancel={() => setIsProcessArticleModalOpen(false)}
      />
      <RejectArticleModal
        open={isRejectArticleModalOpen}
        onCancel={() => {
          setIsRejectArticleModalOpen(false);
        }}
        onSubmit={(inputs) => {
          if (currentRole === RoleEnum.EDITOR) {
            rejectArticleByEditor(inputs);
          }
          if (currentRole === RoleEnum.JUROR) {
            rejectArticleByJuror(inputs);
          }
        }}
      />
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
            key: 2,
            label: t('article-detail.status'),
            children: (
              <ArticleStatusBadge
                status={article?.status as ArticleStatusEnum}
              />
            ),
            span: 2,
          },
          {
            key: 3,
            label: t('article-detail.short-description'),
            children: article?.shortDescription ?? '-',
            span: 3,
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
            span: 2,
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
      <Row gutter={8}>
        <Col xl={{ span: 12 }} lg={{ span: 24 }}>
          <Descriptions
            title={t('article-detail.questions')}
            className="p-4 mb-4"
            style={{ backgroundColor: colorBgContainer }}
            layout="vertical"
            items={article?.questionList.map((articleQuestion) => ({
              key: articleQuestion.id,
              label: articleQuestion.question.content,
              children: articleQuestion.reply,
              span: 3,
            }))}
          />
        </Col>
        <Col xl={{ span: 12 }} lg={{ span: 24 }}>
          <Descriptions
            title={t('article-detail.status-history.header')}
            className="p-4 mb-4"
            style={{ backgroundColor: colorBgContainer }}
            items={[
              {
                key: 1,
                children: (
                  <Table
                    className="w-full"
                    pagination={false}
                    dataSource={article?.statusHistoryList}
                    columns={[
                      {
                        title: t('article-detail.status-history.row-number'),
                        render: (_, __, index) => index + 1,
                      },
                      {
                        title: t('article-detail.status-history.owner'),
                        dataIndex: 'description',
                        render: (_, { affectedBy }) => {
                          return `${affectedBy.lastName} ,${affectedBy.firstName}`;
                        },
                      },
                      {
                        title: t('article-detail.status-history.role'),
                        render: (_, { role }) => <RoleBadge role={role} />,
                      },

                      {
                        title: t('article-detail.status-history.status'),
                        render: (_, { status }) => (
                          <ArticleStatusBadge status={status} />
                        ),
                      },
                      {
                        title: t('article-detail.status-history.date'),
                        dataIndex: 'createdAt',
                        render: (_, { createdAt }) => {
                          return normalizeDate(createdAt);
                        },
                      },
                    ]}
                  />
                ),
              },
            ]}
          />
        </Col>
      </Row>
    </ReactQueryWrapper>
  );
}

ArticleDetailPage.getLayout = DashboardLayout;

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
export default ArticleDetailPage;
