import { ArticleStatusEnum } from '@shared/enums';
import { i18n } from 'next-i18next';

export const ArticleStatusConstant = (articleStatus: ArticleStatusEnum) => {
  const articleStatusToTranslationMapper: Record<ArticleStatusEnum, string> = {
    [ArticleStatusEnum.EDITING]: i18n?.t(
      'constants.article-status.editing'
    ) as string,
    [ArticleStatusEnum.FINALIZING]: i18n?.t(
      'constants.article-status.finalizing'
    ) as string,
    [ArticleStatusEnum.JUDGING]: i18n?.t(
      'constants.article-status.judging'
    ) as string,
    [ArticleStatusEnum.PROCESSING]: i18n?.t(
      'constants.article-status.processing'
    ) as string,
    [ArticleStatusEnum.PUBLISHED]: i18n?.t(
      'constants.article-status.published'
    ) as string,
    [ArticleStatusEnum.REJECTED]: i18n?.t(
      'constants.article-status.rejected'
    ) as string,
  };
  return articleStatusToTranslationMapper[articleStatus];
};
