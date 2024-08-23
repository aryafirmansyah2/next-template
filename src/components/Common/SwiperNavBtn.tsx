import React from 'react';
import { useSwiper } from 'swiper/react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex gap-7 ">
      <button onClick={() => swiper.slidePrev()}>
        <MdNavigateBefore className="bg-red-800 text-white rounded-full text-3xl" />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <MdNavigateNext className="bg-red-800 text-white rounded-full text-3xl" />
      </button>
    </div>
  );
};
