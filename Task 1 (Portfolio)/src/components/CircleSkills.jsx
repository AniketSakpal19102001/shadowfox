"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const useDelayedState = (delay) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setState(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return state;
};

export default function CircleSkills() {
  const logoImages = [
    "https://img.icons8.com/color/48/html-5--v1.png",
    "https://img.icons8.com/color/48/css3.png",
    "https://img.icons8.com/plasticine/100/postgreesql.png",
    "https://img.icons8.com/color/48/javascript--v1.png",
    "https://img.icons8.com/officel/80/react.png",
    "https://img.icons8.com/fluency/48/node-js.png",
    "https://img.icons8.com/ios/50/FFFFFF/express-js.png",
    "https://img.icons8.com/color/48/mongo-db.png",
    "https://img.icons8.com/color/48/git.png",
  ];

  const startRevolving = useDelayedState(2000);

  const containerVariants = {
    start: { rotate: 0 },
    revolve: {
      rotate: 360,
      transition: { duration: 10, repeat: Infinity, ease: "linear" },
    },
  };

  const logoVariants = {
    initial: { x: 0, y: 0, opacity: 0, rotate: 0 },
    spread: (i) => ({
      x: Math.cos((i / 9) * Math.PI * 2) * 100,
      y: Math.sin((i / 9) * Math.PI * 2) * 100,
      opacity: 1,
      transition: { duration: 1, delay: i * 0.1 },
    }),
  };

  return (
    <div className="relative w-[264px] h-[264px] mx-auto">
      <motion.div
        className="w-full h-full"
        variants={containerVariants}
        animate={startRevolving ? "revolve" : "start"}
      >
        {logoImages.map((src, index) => (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2 -ml-[30px] -mt-[30px]"
            variants={logoVariants}
            initial="initial"
            animate="spread"
            custom={index}
          >
            <motion.img
              src={src}
              alt={`Logo ${index + 1}`}
              width={60}
              height={60}
              className="rounded-full"
              animate={{
                rotate: startRevolving ? -360 : 0,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
