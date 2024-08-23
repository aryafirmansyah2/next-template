/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const overview = () => {
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
    const getDataCredits = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=f1001ecef589d641623a819d8b406909`
        )
        .then((res) => {
          setCredit(res.data.cast);
          // console.log(res.data.crew);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getDataCredits();
    getDataMovie();
  }, [id]);

  return (
    <div className="w-full mt-5 flex flex-col gap-5">
      <div className="pr-40">
        <p>{data.overview}</p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex ">
          <h1 className="text-gray-500 w-32">Staring</h1>
          <div className="flex gap-2">
            {credit.map((item: any, index: number) => {
              {
                if (index < 5)
                  return (
                    <a href="#" key={index}>
                      {item.name},{' '}
                    </a>
                  );
              }
            })}
            <a href="" className="text-red-800">
              Lainnya . . .
            </a>
          </div>
        </div>

        <div className="flex ">
          <h1 className="text-gray-500 w-32">Created By</h1>
          <div className="flex gap-2">
            <a href="#">Keanu Reevesm,</a>
            <a href="#">Halle Berry,</a>
          </div>
        </div>

        <div className="flex ">
          <h1 className="text-gray-500 w-32">Ganre</h1>
          <div className="flex gap-2">
            {data.genres?.map((item: any, index: number) => {
              {
                if (index < 5)
                  return (
                    <a href="#" key={index}>
                      {item.name},{' '}
                    </a>
                  );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default overview;
