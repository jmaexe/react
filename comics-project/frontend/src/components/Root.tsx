import React from 'react';
type RootProps = {
  children: React.ReactNode;
};
const Root = ({ children }: RootProps) => {
  return <div className="flex items-center justify-center">{children}</div>;
};

export default Root;
