import { TAbstractEntity } from '@shared/types';

export type TStorage = TAbstractEntity & {
  mimeType: string;
  extension: string;
  filePath: string;
};
