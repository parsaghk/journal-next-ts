import { TPagination } from '@shared/types';
import { TFilterCountries } from './filter-countries.type';
import { TSortCountries } from './sort-countries.type';

export type TGetCountryListAndCountRequest = {
  filters: TFilterCountries;
  pagination: TPagination;
  sorts: TSortCountries;
};
