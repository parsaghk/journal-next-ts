import { TPagination } from '@shared/types';
import { TFilterCities } from './filter-cities.type';
import { TSortCities } from './sort-cities.type';

export type TGetCityListAndCountRequest = {
  filters: TFilterCities;
  pagination: TPagination;
  sorts: TSortCities;
};
