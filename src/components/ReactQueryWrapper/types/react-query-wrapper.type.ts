import React from 'react';

export type TReactQueryWrapper = {
  children: React.JSX.Element | React.JSX.Element[];
  status: 'success' | 'error' | 'loading' | 'idle';
};
