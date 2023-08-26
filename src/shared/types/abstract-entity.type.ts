import { TEntityId } from './entity-id.type';

export type TAbstractEntity = {
  id: TEntityId;
  createdAt: Date;
  endedAt: Date;
};
