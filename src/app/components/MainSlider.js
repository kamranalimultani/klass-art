import { ArrowUpRight } from "lucide-react";
import React from "react";

export const MainSlider = () => {
  return (
    <div className="w-full bg-[url('/assets/bg.jpeg')] bg-cover bg-center relative before:absolute before:inset-0 before:bg-black/40">
      <div className="relative flex flex-col gap-5 px-6 md:px-16 lg:px-40 text-center h-[100vh] items-center justify-center">
        <p className="text-lg sm:text-xl md:text-3xl text-white leading-tight">
          Instantly Transform Ideas into Stunning
        </p>
        <p className="text-2xl sm:text-4xl md:text-6xl text-white font-black">
          AI-Generated Images
        </p>
        <p className=" sm:text-md text-white max-w-[90%] md:max-w-[75%]">
          Effortlessly generate images from text, enhance existing ones, and
          extract hidden text with AI <br /> – innovative, efficient, and
          creative solutions for all!
        </p>
        <button className="cursor-pointer flex items-center text-center gap-3 text-[#1A1A1A] px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 rounded-2xl bg-white">
          Generate Now <ArrowUpRight color="#1A1A1A" strokeWidth={0.75} />
        </button>
      </div>
    </div>
  );
};
