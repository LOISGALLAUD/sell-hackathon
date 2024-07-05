"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import { useToast } from "@/components/ui/use-toast";
import { avatars } from "@/constants";
import { getNameFromEmail, isValidEmail } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import VaporGrid from "./VaporGrid";

import { useState } from "react";

const Hero = () => {
  const [clicked, setClicked] = useState(false);
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    input.classList.add("animate-pulseBorder");
    setTimeout(() => {
      input.classList.remove("animate-pulseBorder");
    }, 500);
    setEmail(input.value);
    setClicked(false);
  };

  const handleSubmit = () => {
    if (isValidEmail(email)) {
      toast({
        title: `✅ Welcome ${getNameFromEmail(email)} !`,
        description: `${email} address has been added to the waitlist.`,
      });
      setClicked(true);
    } else {
      toast({
        title: "❌ Invalid",
        description: "Please enter a valid email address.",
      });
    }
  };
  return (
    <section
      className="flex flex-col justify-center items-center text-center\
     xl:py-14 py-10 w-full xl:mb-20 mb-10 duration-700 transition-all"
    >
      <VaporGrid />
      <p
        className="relative rounded-full py-2 xl:px-4 px-3 bg-gradient-to-r from-sell-secondary
       to-sell-primary text-white xl:text-sm text-xs font-medium overflow-hidden"
      >
        <span
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r 
        from-transparent via-white to-transparent opacity-75 blur-lg animate-shine"
        />
        Introducing a new online selling platform 🎉
      </p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "sween" }}
        className="xl:text-8xl text-center text-5xl font-bold xl:mt-16 mt-10 mb-10 font-dela max-xl:leading-tight"
      >
        Best way to sell <br className="hidden xl:block" /> your digital product
      </motion.h1>

      <h2 className="text-sell-light xl:text-xl text-md">
        Go from Zero to Hero with simple platform that helps{" "}
        <br className="hidden xl:block" /> creators like you sell their digital
        products online.
      </h2>

      <div className="flex flex-row justify-center items-center my-5 xl:gap-3 gap-1 xl:w-[45%] w-full">
        <div className="relative w-[66%] xl:h-16 h-12 xl:rounded-xl rounded-md">
          <input
            type="email"
            placeholder="Your best email address"
            value={email}
            onChange={handleEmailChange}
            className="font-light size-full xl:rounded-xl rounded-md p-5 focus:outline-none shadow-md xl:text-base text-xs"
          />
          <BorderBeam />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-sell-primary text-white font-semibold xl:rounded-xl rounded-md w-[34%]
        transition-all shadow-[3px_3px_0px_black] xl:h-16 h-12
        hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
        >
          {/* Try it out */}
          {clicked ? (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, rotate: 360 }}
            >
              <FaRegCheckCircle className="inline-block text-3xl" />
            </motion.div>
          ) : (
            "Try it out"
          )}
        </button>
      </div>

      {/* ratings */}
      <div className="flex xl:flex-row flex-col justify-center items-center xl:w-[35%] w-full xl:gap-0 gap-2">
        {/* avatars */}
        <ul className="flex -space-x-3 mr-4">
          {avatars.map((avatar, index) =>
            avatar.src ? (
              <Image
                key={index}
                src={avatar.src}
                alt={avatar.alt}
                width={32}
                height={32}
                className="inline-block size-8 rounded-full
                ring-2 ring-white object-cover bg-[#f5f5f5]"
              />
            ) : (
              <div
                key={index}
                className="flex justify-center items-center text-xs font-semibold size-8 rounded-full 
                ring-2 ring-white bg-[#E7EAFF] text-sell-primary"
                style={{ backgroundColor: avatar.color }}
              >
                100+
              </div>
            )
          )}
        </ul>

        {/* desc */}
        <p className="xl:text-sm text-xs xl:text-start text-center text-sell-light w-2/3">
          <span className="font-semibold text-black">More than 100+</span> users
          are selling their products <br className="hidden xl:block" /> online
          with simple & easy ways
        </p>
      </div>
    </section>
  );
};

export default Hero;
