import React, { FC } from 'react';
import SideBar from './SideBar';

type Props = {
  children: React.ReactNode;
  link: string;
};

const Layout: FC<Props> = ({ children, link }) => {
  return (
    <div>
      <SideBar link={link ? link : '#'}>
        <main className="">{children}</main>
      </SideBar>
    </div>
  );
};

export default Layout;
