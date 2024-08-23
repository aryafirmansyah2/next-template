import React, { FC, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

interface Props {
  url: string;
}

const ModalYt: FC<Props> = ({ url }) => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show ? (
        <div className="absolute w-full h-screen top-0 left-0 flex items-center justify-center ">
          <div className="bg-black w-full h-screen absolute top-0 z-10 opacity-80" />
          <div className="absolute  z-20  flex flex-col justify-around gap-5 pt-5 bg-black">
            <div className=" flex justify-end mr-5 ">
              <div
                className="p-3 border-solid border-2 border-gray-700 rounded-md"
                onClick={() => setShow(!show)}
              >
                <IoCloseSharp />
              </div>
            </div>
            <iframe className="w-[1280px] h-[720px] " src={url}></iframe>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalYt;
