import { ReactQuillProps } from 'react-quill';

export type TTextEditor = Pick<
  ReactQuillProps,
  'value' | 'style' | 'className' | 'onChange'
>;
