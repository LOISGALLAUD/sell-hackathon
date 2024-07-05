"use client";

import { footerLinks } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <nav
      className="xl:px-4 px-3 xl:py-3 py-2 w-full xl:w-[70%] xl:mb-10 mb-3 xl:mt-28 mt-10
     flex flex-row md:justify-between justify-center items-center font-dm"
    >
      <motion.div
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 50,
        }}
        onClick={backToTop}
        className="flex flex-row justify-center items-center gap-2 cursor-pointer group"
      >
        <Image
          src="/icons/logo-dark.svg"
          alt="Sell"
          width={100}
          height={100}
          className="xl:size-7 size-5 text-sell-dark rotate-180 group-hover:rotate-0 ease-out
           transition-all delay-0 duration-200"
        />
        <h1 className="xl:text-xl text-lg font-[500]">Sell</h1>
      </motion.div>
      <ul className="flex-row justify-center items-center gap-5 font-[500] text-sm hidden md:flex">
        {footerLinks.map((link, index) => (
          <Link key={index} href={link.href} className="relative group">
            <li>{link.title}</li>
            <span
              className="absolute bottom-0 left-0 h-[2px] w-0 bg-sell-dark
                      transition-all delay-0 duration-200 group-hover:w-full"
            />
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Footer;
