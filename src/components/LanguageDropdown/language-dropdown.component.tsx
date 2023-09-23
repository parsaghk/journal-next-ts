import { DownOutlined } from '@ant-design/icons';
import { localeToLanguageDataMapper } from '@shared/constants';
import { Button, Dropdown, MenuProps, Space } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

export default function LanguageDropdown() {
  const { i18n } = useTranslation();
  const dropDownItemList: MenuProps['items'] = [];
  const router = useRouter();
  const dir = i18n.dir(i18n.language);
  React.useEffect(() => {
    document.body.dir = dir;
  }, [dir]);
  localeToLanguageDataMapper.forEach((value, key) => {
    dropDownItemList.push({
      key,
      label: (
        <Link href={router.asPath} locale={key}>
          <Space>
            {value.flag}
            {value.language}
          </Space>
        </Link>
      ),
    });
  });
  return (
    <Dropdown menu={{ items: dropDownItemList }}>
      <Button>
        <Space>
          {localeToLanguageDataMapper.get(i18n.language)?.flag}
          {localeToLanguageDataMapper.get(i18n.language)?.language}
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
}
