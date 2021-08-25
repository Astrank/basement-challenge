import type { NextPage } from "next";
import Image from "next/image";

import header from "../assets/header.svg";
import globe from "../assets/globe.svg"

const Home: NextPage = () => {
  return (
    <div className="max-w-screen">
      <div className="p-7">
        <Image src={header} />
      </div>
      <div className="border-t border-b my-8 py-3 text-xl md:text-4xl whitespace-nowrap overflow-hidden">
        <h1 className="marquee">
          A man can’t have enough base­ment. swag  —  A man can’t have enough
          base­ment. swag  — A man can’t have enough base­ment. swag  —
        </h1>
      </div>
      <div className="flex flex-col gap-7 lg:grid lg:grid-cols-3 sm:px-7 sm:grid sm:grid-cols-2">
        <div>
          <div className="relative bg-gradient-to-t from-custom-grey to-black">
            <img src="\products\shirt.png" alt="" className="hover:hidden" />
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100">
              <Image src={globe} />
            </div>
          </div>
          <div className="flex flex-row border-t-2 py-3 text-xl">
            <h1>Black t-shirt</h1>
            <h1 className="ml-auto">$7.95</h1>
          </div>
        </div>
        <div>
          <div className="relative bg-gradient-to-t from-custom-grey to-black">
            <img src="\products\hoodie.png" alt="" className="" />
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100">
              <Image src={globe} />
            </div>
          </div>
          <div className="flex flex-row border-t-2 py-3 text-xl">
            <h1>Black t-shirt</h1>
            <h1 className="ml-auto">$7.95</h1>
          </div>
        </div>
        <div> 
          <div className="relative bg-gradient-to-t from-custom-grey to-black">
            <img src="\products\cap.png" alt="" />
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100">
              <Image src={globe} />
            </div>
          </div>
          <div className="flex flex-row border-t-2 py-3 text-xl">
            <h1>Black t-shirt</h1>
            <h1 className="ml-auto">$7.95</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
