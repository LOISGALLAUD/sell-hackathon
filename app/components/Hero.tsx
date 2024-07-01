"use client";

import { useToast } from "@/components/ui/use-toast";
import { avatars } from "@/constants";
import { getNameFromEmail, isValidEmail } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import VaporGrid from "./VaporGrid";

const Hero = () => {
  const [clicked, setClicked] = useState(false);
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
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
    <section className="flex flex-col justify-center items-center text-center py-14 w-full mb-20">
      <VaporGrid />
      <p
        className="relative rounded-full py-2 px-4 bg-gradient-to-r from-sell-secondary
       to-sell-primary text-white text-sm font-medium overflow-hidden"
      >
        <span
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r 
        from-transparent via-white to-transparent opacity-75 blur-lg animate-shine"
        ></span>
        Introducing a new online selling platform 🎉
      </p>

      <h1 className="text-8xl font-bold mt-16 mb-8 font-dela">
        Best way to sell <br /> your digital product
      </h1>

      <h2 className="text-sell-light text-xl">
        Go from Zero to Hero with simple platform that helps <br /> creators
        like you sell their digital products online.
      </h2>

      <div className="flex flex-row justify-center items-center my-5 gap-3 w-[45%]">
        <input
          type="email"
          placeholder="Your best email address"
          value={email}
          onChange={handleEmailChange}
          className="rounded-xl w-[66%] h-16 p-5 font-light"
        />
        <button
          onClick={handleSubmit}
          className="bg-sell-primary text-white font-semibold rounded-xl w-[34%]
        transition-all shadow-[3px_3px_0px_black] h-16
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
      <div className="flex flex-row justify-center items-center w-[35%]">
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
        <p className="text-sm text-start text-sell-light">
          <span className="font-semibold text-black">More than 100+</span> users
          are selling their products <br /> online with simple & easy ways
        </p>
      </div>
    </section>
  );
};

export default Hero;
