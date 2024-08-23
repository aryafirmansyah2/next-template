import ModalYt from '@/components/Common/ModalYt';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper';
import { SwiperNavButtons } from '@/components/Common/SwiperNavBtn';
import axios from 'axios';
import { useRouter } from 'next/router';
const TrailerMedia = () => {
  const [modal, setModal] = useState(false);
  const [url, setUrl] = useState('');
  const [data, setData] = useState<any>([]);
  const [thrailers, setThrailers] = useState<any>([]);
  const [posters, setPosters] = useState<any>([]);
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
        });
    };
    const getDataPosters = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/images?api_key=f1001ecef589d641623a819d8b406909`
        )
        .then((res) => {
          setPosters(res.data.backdrops);
        });
    };
    const getDataThrailerMovie = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=f1001ecef589d641623a819d8b406909`
        )
        .then((res) => {
          setThrailers(res.data.results);
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getDataMovie();
    getDataPosters();
    getDataThrailerMovie();
  }, [id]);

  console.log(thrailers);
  console.log(data);
  console.log(posters);

  return (
    <div>
      <div>
        <h1 className="text-2xl font-medium mt-5">Media {data.title} </h1>
        <div className="mt-5 flex overflow-x-auto space-x-8 justify-start  w-[100%]">
          {posters &&
            posters.map((item: any, index: number) => (
              <section
                className="  flex-shrink-0"
                onClick={() => setModal(!modal)}
                key={index}
              >
                <div className="bg-rose-500">
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.file_path}`}
                    alt=""
                    className="w-60 h-40"
                    onClick={() =>
                      setUrl('https://www.youtube.com/embed/W9JHZwtObqs')
                    }
                  />
                </div>
              </section>
            ))}
        </div>
        <div className="mt-5 flex overflow-x-auto space-x-8 justify-start  w-[100%]">
          {thrailers &&
            thrailers.map((item: any, index: number) => (
              <section
                className="  flex-shrink-0"
                onClick={() => setModal(!modal)}
                key={index}
              >
                <div className="bg-rose-500">
                  <iframe src={`https://www.youtube.com/embed/${item.key}`} />
                </div>
              </section>
            ))}
        </div>
        {modal ? <ModalYt url={url} /> : null}
      </div>
    </div>
  );
};

export default TrailerMedia;
