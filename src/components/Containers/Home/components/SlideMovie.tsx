import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const SlideMovie = () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const [data, setData] = useState([]);
  const [pageNow, setPageaNow] = useState(1);
  const [time, seTime] = useState('day');

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/${time}?page=${pageNow}&api_key=f1001ecef589d641623a819d8b406909`
        )
        .then((res) => {
          setData(res.data.results);
          // console.log(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [pageNow, time]);
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data &&
          data.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[500px] relative">
                <img
                  src={`https://www.themoviedb.org/t/p/original/${item.backdrop_path}`}
                  alt="bgmovie"
                  className="w-full h-full object-cover"
                />
                <div
                  className=" w-full h-[500px] absolute top-0 px-10 py-5 "
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(17,17,17,1) 15%, rgba(0,0,0,0.33519345238095233) 100%)',
                  }}
                >
                  <div className=" bg-transparent flex flex-col justify-center h-full">
                    <div className="flex items-center  mb-5 gap-2 ">
                      <div className="bg-red-800 w-10 h-10 flex items-center justify-center text-2xl font-bold text-white rounded-full">
                        N
                      </div>
                      <h1 className="text-white text-md font-semibold tracking-[0.5em]">
                        SERIES
                      </h1>
                    </div>
                    <div className="bg-transparent">
                      <h1 className="bg-transparent text-6xl font-bold mb-5">
                        {item.original_title}
                      </h1>
                      <p className="bg-transparent text-lg w-[40rem]">
                        {item.overview}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SlideMovie;
