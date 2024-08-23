import HeadWeb from '@/components/Common/HeadWeb';
import makeStyles from '@mui/material/styles';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '@/components/Mixins/Layout';
import { Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';

const MovieSearch = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3//search/multi?query=${id}&api_key=f1001ecef589d641623a819d8b406909&page=${page}}`
        )
        .then((res) => {
          setData(res.data.results);
          setTotalPage(res.data.total_pages);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [id, page]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <HeadWeb title="Movie Search | N.SERIES" />
      <Layout link="/">
        <div className="w-full px-10 py-5 text-3xl font-semibold  bg-gray-900 flex items-center mb-10">
          Search :{' '}
          <div className="font-normal bg-red-800 px-5 ml-5 "> {id}</div>
        </div>
        <div className="grid grid-cols-5 px-10 gap-10 ">
          {data &&
            data.map((item: any, index: number) => (
              <div key={index} className="w-[220px 330px]">
                <img
                  src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`}
                  alt="poster"
                  className="w-full object-cover  bg-red-800 h-full rounded-xl "
                />
              </div>
            ))}
        </div>
        <div className="flex justify-center items-center my-10">
          <Pagination
            count={totalPage}
            variant="outlined"
            shape="rounded"
            size="large"
            onChange={handleChange}
            sx={{
              '& .MuiPaginationItem-root': {
                color: '#fff',
              },
              '& .MuiPaginationItem-page.Mui-selected': {
                backgroundColor: 'rgb(155 28 28 / 100%)',
                color: '#fff',
              },
              '& .MuiTouchRipple-root': {
                border: '1px solid rgb(155 28 28 / 100%)',
              },
            }}
          />
        </div>
      </Layout>
    </>
  );
};

export default MovieSearch;
