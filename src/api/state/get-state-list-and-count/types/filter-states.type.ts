import { TFilterCountries } from '@api/country';
import { TAbstractFilter } from '@shared/types';

export type TFilterStates = TAbstractFilter & {
  name?: string;
  country?: TFilterCountries;
};
