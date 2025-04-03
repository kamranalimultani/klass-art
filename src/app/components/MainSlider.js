"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const images = ["/assets/bg.jpeg", "/assets/bg.jpeg", "/assets/bg.jpeg"];

export const MainSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[100vh] relative">
      {/* Background Slider */}
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative flex flex-col gap-3 px-6 md:px-16 lg:px-40 text-center h-full items-center justify-center">
        <p className="font-dmSans text-lg sm:text-xl md:text-[38px] text-white leading-tight">
          Instantly Transform Ideas into Stunning
        </p>
        <p className="font-dmSans text-2xl sm:text-4xl md:text-[66px] text-white font-black">
          AI-Generated Images
        </p>
        <p className="font-dmSans sm:text-md text-white max-w-[90%] md:max-w-[75%]">
          Effortlessly generate images from text, enhance existing ones, and
          extract hidden text with AI <br /> – innovative, efficient, and
          creative solutions for all!
        </p>
        <button
          className="animate-pulse relative overflow-hidden cursor-pointer flex items-center text-center gap-3 text-[#1A1A1A] px-2 sm:px-6 md:px-6 py-4 sm:py-4 md:py-5 rounded-2xl bg-white transition-all duration-500 ease-in-out
  before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#1A1A1A] before:to-[#333] before:w-0 before:h-full before:transition-all before:duration-500 before:ease-in-out before:rounded-2xl
  hover:before:w-full hover:text-white"
        >
          <span className="relative z-10">Generate Now</span>
          <ArrowUpRight
            className="relative z-10"
            color="currentColor"
            strokeWidth={0.75}
          />
        </button>
      </div>
    </div>
  );
};
