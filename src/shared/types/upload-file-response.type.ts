import { TAbstractEntity } from '@shared/types';

export type TUploadFileResponse = TAbstractEntity & {
  filePath: string;
  extension: string;
};
