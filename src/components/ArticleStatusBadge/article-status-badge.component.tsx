import Badge from '@components/Badge';
import { TBadgeProps } from '@components/Badge';
import { ArticleStatusConstant } from '@constants/article-status.constant';
import { ArticleStatusEnum } from '@shared/enums';
import { TArticleStatusBadgeProps } from './types';

export default function ArticleStatusBadge({
  status,
}: TArticleStatusBadgeProps) {
  const statusToVariantMapper: Record<ArticleStatusEnum, TBadgeProps['color']> =
    {
      [ArticleStatusEnum.EDITING]: 'yellow',
      [ArticleStatusEnum.FINALIZING]: 'blue',
      [ArticleStatusEnum.JUDGING]: 'indigo',
      [ArticleStatusEnum.PROCESSING]: 'purple',
      [ArticleStatusEnum.PUBLISHED]: 'green',
      [ArticleStatusEnum.REJECTED]: 'red',
    };
  return (
    <Badge
      color={statusToVariantMapper[status]}
      text={ArticleStatusConstant(status)}
    />
  );
}
