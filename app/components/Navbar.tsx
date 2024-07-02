"use client";

import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav
      className="bg-sell-dark rounded-xl xl:px-4 px-3 xl:py-3 py-2 w-full xl:w-[70%] xl:mt-10 mt-5
    flex flex-row justify-between items-center text-white font-dm"
    >
      <div className="flex flex-row justify-center items-center gap-2 cursor-pointer">
        <Image
          src="/icons/logo.svg"
          alt="Sell"
          width={100}
          height={100}
          className="xl:size-7 size-5"
        />
        <h1 className="xl:text-xl text-lg font-[500]">Sell</h1>
      </div>
      <a
        href="https://x.com/loisglld"
        rel="noopener noreferrer"
        target="_blank"
        className="flex flex-row justify-center items-center xl:gap-3 gap-2 cursor-pointer"
      >
        <BsTwitterX className="xl:text-lg text-sm" />
        <h1 className="xl:text-base text-sm">Follow us on Twitter</h1>
      </a>
    </nav>
  );
};

export default Navbar;
