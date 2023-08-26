import { TPagination } from '@shared/types';
import { TFilterStates } from './filter-states.type';
import { TSortStates } from './sort-states.type';

export type TGetStateListAndCountRequest = {
  filters: TFilterStates;
  pagination: TPagination;
  sorts: TSortStates;
};
