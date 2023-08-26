import { TEntityId } from './entity-id.type';

export type TAbstractFilter = {
  id?: TEntityId;
  createdAt?: string;
  updatedAt?: string;
};
