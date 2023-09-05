import { TAbstractEntity } from '@shared/types';
import {
  Pagination,
  Space,
  Table as AntTable,
  TablePaginationConfig,
  theme,
} from 'antd';
import { FilterValue } from 'antd/es/table/interface';
import { TTable } from './types';

// const antDesignSorterToApiSorterMapper = {
//   ascend: SortEnum.ASC,
//   descend: SortEnum.DESC,
// };
// const apiSorterToAntDesignSorterMapper = {
//   [SortEnum.ASC]: 'ascend',
//   [SortEnum.DESC]: 'descend',
// };

export default function Table<RecordType extends TAbstractEntity>({
  dataSource,
  columns,
  paginationMetaData,
  setQuery,
}: TTable<RecordType>): JSX.Element {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // TODO -> column with sort
  // const columnListWithSort: NonNullable<TableProps<RecordType>['columns']> =
  //   columns?.map((column) => {
  //     const sortOrder =
  //       sorts[column.dataIndex as keyof TTable<RecordType>['sort']];
  //     Object.assign(column, {
  //       sortOrder: sortOrder
  //         ? apiSorterToAntDesignSorterMapper[sortOrder]
  //         : null,
  //     });
  //     return column;
  //   });

  async function onPaginationChange(
    selectedPageIndex: number,
    selectedPageSize: number
  ) {
    setQuery(
      {
        pagination: {
          pageIndex: selectedPageIndex,
          pageSize: selectedPageSize,
        },
      },
      'replace'
    );
  }

  const handleTableChange = (
    _: TablePaginationConfig,
    filters: Record<string, FilterValue | null>
    // sorter: SorterResult<RecordType> | SorterResult<RecordType>[]
  ) => {
    // TODO -> add sort
    setQuery({ filters }, 'replace');
  };
  return (
    <>
      <Space
        className="p-4 rounded"
        direction="vertical"
        style={{ backgroundColor: colorBgContainer }}
      >
        <AntTable
          onChange={handleTableChange}
          columns={columns}
          sticky={true}
          dataSource={dataSource}
          rowKey="id"
          scroll={{ x: 600 }}
          pagination={false}
        />
      </Space>
      <Space
        align="center"
        direction="vertical"
        className="mt-[20px] p-4 mb-20"
        style={{ backgroundColor: colorBgContainer }}
      >
        <Pagination
          total={paginationMetaData.itemCount}
          pageSizeOptions={[10, 20, 50]}
          onChange={onPaginationChange}
          onShowSizeChange={onPaginationChange}
          current={paginationMetaData.page}
          pageSize={paginationMetaData.take}
          showSizeChanger={true}
        />
      </Space>
    </>
  );
}
