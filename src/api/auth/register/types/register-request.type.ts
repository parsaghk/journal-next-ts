import { TEntityId } from '@shared/types';

export type TRegisterRequest = {
  firstName: string;
  middleName?: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  position?: string;
  institution?: string;
  department?: string;
  address?: string;
  countryId: TEntityId;
  stateId?: TEntityId;
  cityId?: TEntityId;
  postalCode?: string;
  personalKeywordList: string[];
};
