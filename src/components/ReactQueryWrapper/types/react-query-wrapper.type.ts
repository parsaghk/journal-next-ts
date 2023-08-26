export type TReactQueryWrapper = {
  children: JSX.Element;
  status: 'success' | 'error' | 'loading' | 'idle';
};
