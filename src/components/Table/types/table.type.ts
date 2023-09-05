import {
  TAbstractEntity,
  TAbstractFilter,
  TAbstractSort,
  TPageMeta,
} from '@shared/types';
import { TableProps } from 'antd';
import { QueryParamConfigMap, SetQuery } from 'use-query-params';

export type TTable<
  RecordType extends TAbstractEntity,
  SortType extends TAbstractSort = TAbstractSort,
  FilterType extends TAbstractFilter = TAbstractFilter,
> = Pick<TableProps<RecordType>, 'dataSource' | 'loading'> & {
  columns: NonNullable<TableProps<RecordType>['columns']>;
  paginationMetaData: TPageMeta;
  sorts?: SortType;
  filters?: FilterType;
  setQuery: SetQuery<QueryParamConfigMap>;
};
