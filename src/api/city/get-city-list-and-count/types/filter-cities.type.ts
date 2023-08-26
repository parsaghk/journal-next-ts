import { TFilterStates } from '@api/state';
import { TAbstractFilter } from '@shared/types';

export type TFilterCities = TAbstractFilter & {
  name?: string;
  state?: TFilterStates;
};
