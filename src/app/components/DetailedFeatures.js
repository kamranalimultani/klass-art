import React from "react";
import { SingleFeature } from "./SingleFeature";

export const DetailedFeatures = () => {
  return (
    <div className=" px-6 md:px-16 lg:px-36 py-20 bg-[url('/assets/mobilebg.png')] bg-no-repeat bg-cover bg-center">
      <div className="  px-6 md:px-16 lg:px-36 ">
        <p className="text-center font-openSans text-3xl sm:text-4xl md:text-[66px] font-bold pt- pb-20">
          Transform Ideas{" "}
          <span className="bg-gradient-to-r from-[#C289FF] to-[#5555FF] bg-clip-text text-transparent">
            {" "}
            into Reality
          </span>
        </p>
        <div>
          {[
            {
              title: { first: "AI-Powered", second: "Creativity" },
              desc: "Generate any picture you can imagine with any face.",
              img: "/assets/1.png",
              button: "Generate Now",
            },
            {
              title: { first: "Creative", second: "Upscale" },
              desc: "Enhance your images with any background.",
              img: "/assets/2.png",
              button: "Enhance Image",
            },
            {
              title: { first: "Text Behind", second: "the Image" },
              desc: "Elevate visuals with seamless background removal for a professional touch. please discribe",
              img: "/assets/3.png",
              button: "Extract Text",
            },
          ].map((item, index) => {
            return (
              <SingleFeature
                key={index}
                reverse={index % 2 === 1}
                img={item.img}
                title={item.title}
                desc={item.desc}
                button={item.button}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
