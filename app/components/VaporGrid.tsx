"use client";

import { motion } from "framer-motion";
import React from "react";

const circles = [
  {
    className: "bg-sell-fog",
    size: "w-72 h-72",
    top: "20%",
    left: "15%",
    x: [0, 150, 300, 150, 0],
    y: [0, 100, 200, 100, 0],
    duration: 10,
  },
  {
    className: "bg-sell-lava",
    size: "w-72 h-72",
    top: "50%",
    left: "70%",
    x: [0, -200, -400, -100, 50, 0],
    y: [0, -50, -100, 50, 0],
    duration: 17,
  },
  {
    className: "bg-sell-fog",
    size: "w-96 h-96",
    top: "80%",
    left: "40%",
    x: [0, 100, 300, 100, 0],
    y: [0, 80, 200, 80, 0],
    duration: 10,
  },
  {
    className: "bg-sell-lava",
    size: "w-96 h-96",
    top: "30%",
    left: "80%",
    x: [0, -150, -300, -150, 0],
    y: [0, -100, -200, -100, 0],
    duration: 12,
  },
  {
    className: "bg-sell-fog",
    size: "w-72 h-72",
    top: "60%",
    left: "10%",
    x: [0, 100, 200, 100, 0],
    y: [0, 50, 100, 50, 0],
    duration: 9,
  },
  {
    className: "bg-sell-lava",
    size: "w-72 h-72",
    top: "10%",
    left: "60%",
    x: [0, -100, -200, -50, 0],
    y: [0, -50, -100, -50, 0],
    duration: 16,
  },
  {
    className: "bg-sell-lava",
    size: "w-96 h-96",
    top: "90%",
    left: "90%",
    x: [0, -50, -100, -50, 0],
    y: [0, 50, -120, -50, 70, 0],
    duration: 14,
  },
  {
    className: "bg-sell-fog",
    size: "w-96 h-96",
    top: "40%",
    left: "20%",
    x: [0, 53, 100, -21, 0],
    y: [0, -50, 508, 100, 0],
    duration: 16,
  },
];

const VaporGrid: React.FC = () => {
  return (
    <div
      className="absolute top-0 left-0
    w-full h-full overflow-hidden z-[-1]"
    >
      {/* masque de gradient vers le bas */}
      <div
        className="absolute top-[80%] left-0 w-full h-1/5 bg-gradient-to-b 
      from-transparent to-sell-background  z-[-1]"
      ></div>

      {/* Cercles flous en arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full z-[-2]">
        {circles.map((circle, index) => (
          <motion.div
            key={index}
            className={`absolute ${circle.className} opacity-75 ${circle.size} rounded-full blur-2xl`}
            style={{ top: circle.top, left: circle.left }}
            custom={circle}
            variants={{
              initial: {
                scale: 1.2,
                x: circle.x,
                y: circle.y,
              },
              animate: {
                x: circle.x,
                y: circle.y,
                transition: {
                  duration: circle.duration,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
              },
            }}
            initial="initial"
            animate="animate"
          ></motion.div>
        ))}
      </div>
      {/* Grille */}
      <div
        className="grid grid-cols-12 grid-rows-10 h-full w-full
       opacity-20 z-[-1]"
      >
        {[...Array(120)].map((_, i) => (
          <div key={i} className="border border-sell-background"></div>
        ))}
      </div>
    </div>
  );
};

export default VaporGrid;
