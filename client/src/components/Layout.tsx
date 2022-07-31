import React from 'react';

const Layout = ({children}: React.PropsWithChildren) => {
  return (
    <div className="m-auto max-w-[1000px] p-10">
      {children}
    </div>
  );
};

export default Layout;
