import { Spin, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TReactQueryWrapper } from './types';

export default function ReactQueryWrapper({
  children,
  status,
}: TReactQueryWrapper) {
  const { t } = useTranslation();
  const reactQueryStatusToComponentMapper: Record<typeof status, JSX.Element> =
    {
      loading: <Spin className="flex h-full justify-center items-center" />,
      success: <>{children}</>,
      error: <Typography>{t('react-query-wrapper.error')}</Typography>,
      idle: <>{children}</>,
    };
  return reactQueryStatusToComponentMapper[status];
}

ReactQueryWrapper;
