"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ArrowTop = () => {
  const [isShown, setIsShown] = useState(false);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsShown(true);
      } else {
        setIsShown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 p-2 bg-sell-primary text-white rounded-full cursor-pointer z-50 duration-200 transition-opacity lg:hidden",
        isShown ? "opacity-100" : "opacity-0"
      )}
    >
      <FaArrowUp onClick={handleBackToTop} />
    </div>
  );
};

export default ArrowTop;
