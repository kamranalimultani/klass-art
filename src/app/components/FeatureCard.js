import { DM_Sans } from "next/font/google";
import React from "react";

export const FeatureCard = ({ image, title, des }) => {
  return (
    <div
      className={` rounded-2xl bg-white shadow-lg hover:shadow-2xl cursor-pointer  h-[520px] `}
    >
      <img src={image} alt={title} className=" w-full object-cover" />

      {/* Text Content */}
      <div className="mt-4 p-4   flex flex-col justify-center ">
        <p className="text-3xl font-[900]">{title}</p>
        <p className="text-gray-600 text-sm mt-4">{des}</p>
      </div>
    </div>
  );
};
