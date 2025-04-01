import { ArrowUpRight } from "lucide-react";
import React from "react";

export const SingleFeature = ({
  reverse = false,
  img,
  title,
  desc,
  button,
}) => {
  return (
    <div
      className={`flex items-center gap-18 mb-18 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-1/2">
        <img src={img}></img>
      </div>
      <div className="w-1/2">
        <p className=" font-dmSans text-3xl sm:text-4xl md:text-4xl font-bold pb-4">
          {title.first}
          <span className="bg-gradient-to-r from-[#C289FF] to-[#5555FF] bg-clip-text text-transparent">
            {" "}
            {title.second}
          </span>
        </p>
        <p className="text-md text-[#8C8B99]">{desc}</p>
        <button className="my-6 text-sm cursor-pointer flex items-center text-center gap-3 text-white bg-gradient-to-r from-[#3BAAFF] to-[#5556FF] px-6 py-2 rounded-4xl transition-all duration-300 hover:from-[#5556FF] hover:to-[#3BAAFF]">
          {button} <ArrowUpRight color="#ffffff" strokeWidth={0.75} />
        </button>
      </div>
    </div>
  );
};
