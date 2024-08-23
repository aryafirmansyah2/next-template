import Head from 'next/head';
import React, { FC } from 'react';

interface Props {
  title: string;
}

const HeadWeb: FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/N.png" />
    </Head>
  );
};

export default HeadWeb;
