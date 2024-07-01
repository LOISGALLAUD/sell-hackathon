"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const Newsletter = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <section
      className="bg-white rounded-2xl w-[90%] px-28 py-20 mt-20
    flex flex-col justify-center items-center"
    >
      <h1 className="font-dela text-5xl text-center mb-8">
        Be the first to know about new features, special offers, and more.
      </h1>
      <div className="flex flex-row justify-center items-center my-5 gap-3 w-[45%]">
        <input
          type="email"
          placeholder="Your best email address"
          className="rounded-xl w-[66%] h-16 p-5 font-light shadow-md"
        />
        <button
          onClick={() => setClicked(!clicked)}
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
            "Join the waitlist"
          )}
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
