import { TGeneralEntityListRequest } from '@shared/types';
import { TFilterUsers } from './filter-users.type';
import { TSortUsers } from './sort-users.type';

export type TGetUserListRequest = TGeneralEntityListRequest<
  TFilterUsers,
  TSortUsers
>;
