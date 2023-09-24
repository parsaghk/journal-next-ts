import { TRejectArticleModalFormInput } from './reject-article-modal-form-input.type';

export type TRejectArticleModalPops = {
  open: boolean;
  onCancel: () => void;
  onSubmit: (inputs: TRejectArticleModalFormInput) => void;
};
