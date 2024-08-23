import React, { FC } from 'react';
import Head from 'next/head';

import Layout from '@/components/Mixins/Layout';
import Discover from './components/Discover';
import SlideMovie from './components/SlideMovie';
import HeadWeb from '@/components/Common/HeadWeb';

const ContainerHome: FC = () => {
  return (
    <>
      <HeadWeb title="Home | N.SERIES" />
      <Layout link="">
        <SlideMovie />
        <div className="px-10">
          <Discover title="" name="all" />
          <Discover title="Movie" name="movie" />
          <Discover title="Tv" name="tv" />
        </div>
      </Layout>
    </>
  );
};

export default ContainerHome;
