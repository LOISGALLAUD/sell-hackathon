"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import { useToast } from "@/components/ui/use-toast";
import { cn, getNameFromEmail, isValidEmail } from "@/lib/utils";
import { motion } from "framer-motion";
import { FaRegCheckCircle } from "react-icons/fa";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Newsletter = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
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

  const { toast } = useToast();
  const [clicked, setClicked] = useState(false);
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
    <section
      ref={isDesktop ? ref : null}
      className={cn(
        "bg-white rounded-2xl w-[90%] xl:px-28 px-2 xl:py-20 py-7 mt-20\
    flex flex-col justify-center items-center shadow-md duration-700 transition-all",
        inView || !isDesktop
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20"
      )}
    >
      <h1 className="xl:text-7xl text-4xl text-center font-bold xl:mt-16 mt-10 mb-10 font-dela max-xl:leading-tight">
        Be the first to know about new features, special offers, and more.
      </h1>

      <div className="flex flex-row justify-center items-center px-4 my-5 xl:gap-3 gap-1 xl:w-[45%] w-full">
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
        transition-all shadow-[3px_3px_0px_black] xl:h-16 h-12 text-xs xl:text-base
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
            "Join waitlist"
          )}
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
