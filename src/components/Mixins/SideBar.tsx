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
const SideBar: FC<Props> = ({ children, link }) => {
  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState([]);
  const router = useRouter();
  const id = router.query;

  // console.log(id);
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
    <div>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-[0.1px] border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#0F0F11] dark:bg-gray-800">
          <a
            href="https://flowbite.com/"
            className="flex items-center pl-2.5 mb-8 gap-2"
          >
            <div className="bg-red-800 w-10 h-10 flex items-center justify-center text-2xl font-bold text-white rounded-full">
              N
            </div>
            <h1 className="text-white text-md font-semibold tracking-[0.5em]">
              SERIES
            </h1>
          </a>
          <span className="text-gray-500 text-sm space-y-2  pl-4 ">
            News Feed
          </span>
          <ul className="space-y-2 font-medium mt-3">
            <li className="">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="w-10">
                  <TbBrandSafari className=" text-2xl text-white  " />
                </div>
                <span className=" text-white">Browse</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="w-10">
                  <HiFire className=" text-2xl text-white " />
                </div>
                <span className="flex-1  text-white whitespace-nowrap">
                  Trending
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="w-10">
                  <FaRegUser className=" text-xl text-white  " />
                </div>
                <span className="flex-1  text-white whitespace-nowrap">
                  Following
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="w-10">
                  <HiVideoCamera className=" text-2xl text-white  mr-1 " />
                </div>
                <span className="flex-1  text-white whitespace-nowrap">
                  Your Videos
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="w-10">
                  <MdOutlinePlaylistAdd className=" text-2xl text-white  mr-1 " />
                </div>
                <span className="flex-1  text-white whitespace-nowrap">
                  Playlist
                </span>
              </a>
            </li>
          </ul>
          <hr className="my-5 border-gray-700" />
          <span className="text-gray-500 text-sm space-y-2  pl-4 ">
            Gendres
          </span>
          <div className="grid grid-cols-2 gap-5 mt-5  ">
            {data &&
              data.map((item: any, index: number) => (
                <div
                  key={index}
                  className="bg-red-800 text-white text-xs text-center py-1.5 rounded-md"
                >
                  {item.name}
                </div>
              ))}
          </div>
        </div>
      </aside>

      <div className="sm:ml-64 ">
        <div className=" py-5 px-10 bg-[#0F0F11]">
          <div className=" flex justify-between  ">
            <a
              href={link}
              className="border-solid border-2 border-gray-700 p-2 rounded-lg"
            >
              <IoChevronBackOutline className="text-white" />
            </a>
            <div className="flex items-center justify-end gap-7">
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

export default SideBar;
