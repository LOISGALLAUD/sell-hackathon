import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const WavyText = ({ text }: { text: string }) => {
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start((i) => ({
        y: [0, -5, 0],
        transition: { duration: 0.4, delay: i * 0.1 },
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div className="">
      {text.split("").map((letter, i) => (
        <motion.span
          key={i}
          custom={i}
          animate={controls}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

export default WavyText;
