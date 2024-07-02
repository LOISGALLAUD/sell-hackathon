"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import { useToast } from "@/components/ui/use-toast";
import { getNameFromEmail, isValidEmail } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const Newsletter = () => {
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
      className="bg-white rounded-2xl w-[90%] px-28 py-20 mt-20
    flex flex-col justify-center items-center shadow-md"
    >
      <h1 className="font-dela text-5xl text-center mb-8">
        Be the first to know about new features, special offers, and more.
      </h1>
      <div className="flex flex-row justify-center items-center my-5 gap-3 w-[45%]">
        <div className="relative w-[66%] h-16 rounded-xl">
          <input
            type="email"
            placeholder="Your best email address"
            value={email}
            onChange={handleEmailChange}
            className="font-light w-full rounded-xl p-5 focus:outline-none shadow-md"
          />
          <BorderBeam />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-sell-primary text-white font-semibold rounded-xl w-[34%]
        transition-all shadow-[3px_3px_0px_black] h-16
        hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
        >
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
