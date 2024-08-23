import React, { FC } from 'react';
import Header from './Header';

type Props = {
  children: React.ReactNode;
  link: string;
};

const LayoutDetail: FC<Props> = ({ children, link }) => {
  return (
    <div className="">
      <Header link={link ? link : '#'}>
        <main className="px-10 ">{children}</main>
      </Header>
    </div>
  );
};

export default LayoutDetail;
