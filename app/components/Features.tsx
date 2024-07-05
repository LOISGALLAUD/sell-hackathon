"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { features } from "@/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";
import { twMerge } from "tailwind-merge";
import WavyText from "./WavyText";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const RevealBento = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={isDesktop ? ref : null}
      className={cn(
        "px-4 xl:mt-20 mt-10 w-full text-sell-dark\
    flex xl:flex-row flex-col justify-between duration-700 transition-all",

        inView || !isDesktop
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20"
      )}
    >
      {/* Features */}
      <div className="xl:p-4 py-10 xl:w-[50%] w-full h-full">
        <h2 className="text-4xl xl:text-5xl font-dela mb-5 px-4">Features</h2>
        <Accordion type="single" collapsible className="size-full">
          {features.map((feature, index) => (
            <div
              className="flex justify-between items-center group
                py-2 px-5 bg-white rounded-2xl shadow-md mb-2"
              key={index}
            >
              <AccordionItem
                key={index}
                value={String(index)}
                className="w-full cursor-pointer"
              >
                <AccordionTrigger>
                  <div className="flex items-center gap-4">
                    <feature.icon
                      className={cn("text-4xl", feature.iconColor)}
                    />
                    <div className="relative">
                      <h3 className="xl:text-xl text-md font-medium text-start leading-tight">
                        {feature.title}
                      </h3>
                      <span
                        className="absolute bottom-0 left-0 h-[2px] w-0 bg-sell-dark
                      transition-all delay-0 duration-200 group-hover:w-full"
                      />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p>{feature.description}</p>
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>

      {/* About us */}
      <div className="xl:p-4 py-10 xl:w-[50%] w-full h-full">
        <h2 className="text-4xl xl:text-5xl font-dela mb-5 px-4">About us</h2>
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
        >
          <HeaderBlock />
          <SocialsBlock />
        </motion.div>
      </div>
    </div>
  );
};

const HeaderBlock = () => (
  <motion.div
    variants={{
      initial: {
        scale: 0.5,
        y: 50,
        opacity: 0,
      },
      animate: {
        scale: 1,
        y: 0,
        opacity: 1,
      },
    }}
    transition={{
      type: "spring",
      stiffness: 1000,
      damping: 50,
    }}
    className={twMerge(
      "col-span-4 rounded-3xl shadow-md bg-white p-6",
      "col-span-12 row-span-2 md:col-span-6"
    )}
  >
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full ring-sell-dark ring-2"
    />
    <h1 className="mb-12 text-4xl font-[500] leading-tight">
      {/* <span className="italic">Sell</span>-utations !{" "} */}
      <WavyText text="Sell-utations !" />
      <span className="text-sell-light font-normal">
        We are a digital product selling platform.
      </span>
    </h1>
    <a
      href="https://x.com/loisglld"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1 text-sell-primary hover:underline"
    >
      Contact us on social media <FiArrowRight />
    </a>
  </motion.div>
);

const SocialsBlock = () => (
  <>
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 1000,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-3xl shadow-md bg-white p-6",
        "col-span-6 bg-sell-dark md:col-span-3 aspect-square"
      )}
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
    >
      <a
        href="https://github.com/loisgallaud"
        target="_blank"
        rel="noreferrer"
        className="grid h-full place-content-center text-5xl text-white"
      >
        <SiGithub />
      </a>
    </motion.div>
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 1000,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-3xl shadow-md bg-white p-6",
        "col-span-6 bg-white md:col-span-3 aspect-square md:aspect-auto"
      )}
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
    >
      <a
        href="https://who-is-loisg.vercel.app"
        target="_blank"
        rel="noreferrer"
        className="grid h-full place-content-center text-4xl text-sell-primary"
      >
        <SlGlobe />
      </a>
    </motion.div>

    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 1000,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-3xl shadow-md bg-white p-6",
        "col-span-6 bg-white md:col-span-3 aspect-square"
      )}
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
    >
      <a
        href="https://www.linkedin.com/in/loisgallaud/"
        target="_blank"
        rel="noreferrer"
        className="grid h-full place-content-center text-5xl text-sell-primary"
      >
        <FaLinkedin />
      </a>
    </motion.div>

    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 1000,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-3xl shadow-md bg-white p-6",
        "col-span-6 bg-sell-dark md:col-span-3 aspect-square"
      )}
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
    >
      <a
        href="https://x.com/loisglld"
        target="_blank"
        rel="noreferrer"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <BsTwitterX />
      </a>
    </motion.div>
  </>
);

export default RevealBento;
