import { Spin } from 'antd';
import React from 'react';
import { THydration } from './types';

export default function Hydration({ children }: THydration) {
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <React.Fragment>
      {isClient ? (
        children
      ) : (
        <Spin className="flex h-full justify-center items-center" />
      )}
    </React.Fragment>
  );
}
