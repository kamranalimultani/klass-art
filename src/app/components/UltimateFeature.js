"use client";
import React, { useRef } from "react";
import { FeatureCard } from "./FeatureCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const UltimateFeature = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures it animates only once when in view
    threshold: 0.2, // 20% of the element must be visible before triggering
  });

  return (
    <div
      ref={ref}
      className=" px-6 md:px-16 lg:px-36 py-20 bg-[url('/assets/mobilebg.png')] bg-no-repeat bg-cover bg-center"
    >
      {/* Heading */}
      <div className=" text-center pt-12 pb-20">
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }} // Start small and transparent
          animate={inView ? { opacity: 1, scale: 1 } : {}} // Scale up when in view
          transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
          className="font-openSans text-3xl sm:text-4xl md:text-[66px] font-bold text-[#333333]"
        >
          Your Ultimate AI Image Maker
        </motion.p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
        {[
          {
            title: "Text to Image",
            desc: "Enter a text prompt, and AI creates stunning visuals, transforming your imagination into breathtaking images with precision, creativity, and artistic brilliance.",
            img: "/assets/9f9c4803457683cd887dd1538975b446.png",
          },
          {
            title: "Upload Image and Edit through AI",
            desc: "Upload an image, and AI transforms it into stunning variations with intelligent enhancements, precision, and creativity.",
            img: "/assets/girl.png",
          },
          {
            title: "Text Behind Image",
            desc: "Upload an image, and AI accurately extracts and converts text into an editable format, ensuring efficiency, precision, and seamless accessibility for your content.",
            img: "/assets/youttext.png",
          },
        ].map((item, index) => {
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <FeatureCard
                key={item.title}
                image={item.img} // ✅ Corrected Path
                title={item.title}
                des={item.desc}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
