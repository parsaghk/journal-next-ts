import { TGetCountryListAndCountRequest } from '../../get-country-list-and-count';

export type TGetAllCountryListRequest = Omit<
  TGetCountryListAndCountRequest,
  'pagination'
>;
