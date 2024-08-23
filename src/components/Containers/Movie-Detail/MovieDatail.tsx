import ModalYt from '@/components/Common/ModalYt';
import LayoutDetail from '@/components/Mixins/LayoutDetail';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { AiFillStar } from 'react-icons/ai';
import Overview from './components/Overview';
import TrailerMedia from './components/TrailerMedia';
import Ulasan from './components/Ulasan';
import HeadWeb from '@/components/Common/HeadWeb';

const MovieDatail = () => {
  const [menu, setMenu] = useState('overview');
  const [modal, setModal] = useState(false);
  const [data, setData] = useState<any>([]);
  const [credit, setCredit] = useState<any>([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getDataMovie = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=f1001ecef589d641623a819d8b406909`
        )
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getDataMovie();
  }, [id]);

  return (
    <>
      <HeadWeb title={`N.SERIES | ${data.original_title} `} />
      <LayoutDetail link="/">
        <div className="flex w-full h-full gap-32 py-5">
          <div className=" w-[900px] h-full  ">
            <img
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" h-full max-w-4xl w-full ">
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col gap-3">
                <h1 className="text-6xl font-semibold tracking-wider">
                  {data.original_title}
                </h1>
                <div className="flex gap-5">
                  <p>{data.release_date?.split('-')[0]}</p>
                  <p>|</p>
                  <p>{data.runtime}min</p>
                  <p>|</p>
                  <p>{data.status}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <h1 className="text-4xl font-medium">9.0</h1>
                </div>
                <div>
                  <AiFillStar className="text-yellow-300 text-5xl" />
                </div>
              </div>
            </div>
            <div className="w-full mt-10">
              <div className="flex justify-between py-5 w-full">
                <button
                  onClick={() => setMenu('overview')}
                  className={
                    menu === 'overview'
                      ? `border-b-red-800 border-b-4 pb-3`
                      : ``
                  }
                >
                  OVERVIEW
                </button>
                <button
                  onClick={() => setMenu('trailer')}
                  className={
                    menu === 'trailer' ? `border-b-red-800 border-b-4 pb-3` : ``
                  }
                >
                  THRAILERS AND MORE
                </button>
                <button
                  onClick={() => setMenu('ulasan')}
                  className={
                    menu === 'ulasan' ? `border-b-red-800 border-b-4 pb-3` : ``
                  }
                >
                  MORE LIKE THIS
                </button>
                <button
                  onClick={() => setMenu('rekomendasi')}
                  className={
                    menu === 'rekomendasi'
                      ? `border-b-red-800 border-b-4 pb-3`
                      : ``
                  }
                >
                  DETAIL
                </button>
              </div>
            </div>
            {menu === 'overview' ? (
              <Overview />
            ) : menu === 'trailer' ? (
              <TrailerMedia />
            ) : menu === 'ulasan' ? (
              <Ulasan />
            ) : null}
          </div>
        </div>
      </LayoutDetail>
    </>
  );
};

export default MovieDatail;
