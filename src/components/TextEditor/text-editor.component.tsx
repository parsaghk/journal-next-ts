import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { TTextEditor } from './types';

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  [{ direction: 'rtl' }], // text direction
  [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
  ['clean'],
];

export default function TextEditor({
  value,
  style,
  className,
  onChange,
}: TTextEditor) {
  return (
    <ReactQuill
      modules={{
        toolbar: toolbarOptions,
      }}
      onChange={onChange}
      style={style}
      className={className}
      theme="snow"
      value={value}
    />
  );
}
