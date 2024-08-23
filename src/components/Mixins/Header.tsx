/* eslint-disable jsx-a11y/alt-text */
import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { TbBrandSafari, TbUserCircle } from 'react-icons/tb';
import { HiFire, HiVideoCamera } from 'react-icons/hi';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlinePlaylistAdd, MdOutlineNotifications } from 'react-icons/md';
import { IoChevronBackOutline, IoSearchOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
  link: string;
};
const Header: FC<Props> = ({ children, link }) => {
  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          'https://api.themoviedb.org/3/genre/movie/list?api_key=f1001ecef589d641623a819d8b406909'
        )
        .then((res) => {
          setData(res.data.genres);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);
  function HandleSearch(event: any) {
    event.preventDefault();
    const inputValue = event.target.elements.search.value;
    router.push(`/movie-search/${inputValue}`);
  }

  return (
    <div className="h-full">
      <div className="h-full">
        <div className=" py-5 px-10 bg-gray-800">
          <div className=" flex justify-between  ">
            <div className="flex items-center justify-end gap-7">
              <a
                href="https://flowbite.com/"
                className="flex items-center gap-2"
              >
                <div className="bg-red-800 w-10 h-10 flex items-center justify-center text-2xl font-bold text-white rounded-full">
                  N
                </div>
                <h1 className="text-white text-md font-semibold tracking-[0.5em]">
                  SERIES
                </h1>
              </a>
              <a
                href={link}
                className="border-solid border-2 border-gray-700 p-2 rounded-lg"
              >
                <IoChevronBackOutline className="text-white" />
              </a>
              <form onSubmit={HandleSearch}>
                <div className="flex border-[1px] border-solid border-gray-700 rounded-xl pl-5">
                  <button type="submit">
                    <IoSearchOutline className="text-white" />
                  </button>
                  <input
                    type="text"
                    placeholder="Search "
                    className=" bg-transparent h-9 text-white border-transparent focus:border-transparent focus:ring-0 rounded-2xl"
                    name="search"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center justify-end gap-7">
              <div className=" relative">
                <MdOutlineNotifications className="text-white text-3xl" />
                <div className="w-2 h-2 bg-red-500 rounded-full absolute top-1 right-1" />
              </div>
              <div>
                <img
                  src="https://cdn.dribbble.com/users/2502515/avatars/normal/82644ae0c8c786b324cf25011c0297e5.jpg?1678206316&compress=1&resize=80x80"
                  className="w-9 h-9 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
