import { DM_Sans } from "next/font/google";
import React from "react";

export const FeatureCard = ({ image, title, des }) => {
  return (
    <div
      className={` rounded-2xl bg-white shadow-lg hover:shadow-2xl cursor-pointer lg:h-[550px] md:h-[450px] overflow-clip `}
    >
      <img src={image} alt={title} className=" w-full object-cover" />

      {/* Text Content */}
      <div className="mt-4 px-9 pt-4    flex flex-col justify-center ">
        <p className="font-dmSans text-3xl font-[450] text-[#1A1A1A]">
          {title}
        </p>
        <p className="text-[#8C8B99] lg:text-[16px] md:text-sm mt-4 font-dmSans">
          {des}
        </p>
      </div>
    </div>
  );
};
