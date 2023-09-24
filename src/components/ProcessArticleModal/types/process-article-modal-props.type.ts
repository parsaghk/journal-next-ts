import { TAbstractEntity, TUserSummary } from '@shared/types';
import { TProcessArticleModalFormInput } from './process-article-modal-form-input.type';

export type TProcessArticleModalPops = {
  open: boolean;
  onCancel: () => void;
  onSubmit: (inputs: TProcessArticleModalFormInput) => void;
  jurorList: (TAbstractEntity & TUserSummary)[];
  editorList: (TAbstractEntity & TUserSummary)[];
};
