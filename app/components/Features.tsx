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

const RevealBento = () => {
  return (
    <div
      className="px-4 mt-32 w-full text-sell-dark
    flex flex-row justify-between"
    >
      {/* Features */}
      <div className="p-4 w-[50%] h-full">
        <h2 className="text-5xl font-dela mb-5 px-4">Features</h2>
        <Accordion type="single" collapsible className="size-full">
          {features.map((feature, index) => (
            <div
              className="flex justify-between items-center group
                py-2 px-5 bg-white rounded-2xl shadow-md mb-2"
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
                      <h3 className="text-xl font-medium">{feature.title}</h3>
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
      <div className="p-4 w-[50%] h-full">
        <h2 className="text-5xl font-dela mb-5 px-4">About us</h2>
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
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      <span className="italic">Sell</span>-utations !{" "}
      <span className="text-sell-light">
        We are a digital product selling platform.
      </span>
    </h1>
    <a
      href="#"
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
        "col-span-6 bg-sell-dark md:col-span-3"
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
        "col-span-6 bg-white md:col-span-3"
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
        "col-span-6 bg-white md:col-span-3"
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
        "col-span-6 bg-sell-dark md:col-span-3"
      )}
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
    >
      <a
        href="https://twitter.com/loisgallaud"
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
