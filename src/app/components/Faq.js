"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is KLASS ART?",
    answer:
      "KLASS ART is an AI-powered platform that transforms text into stunning images.",
  },
  {
    question: "How does it work?",
    answer:
      "Simply input your text prompt, and our AI will generate high-quality images instantly.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! We offer a free trial so you can test our AI image generation capabilities.",
  },
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-6 md:px-16 lg:px-36 py-20 bg-gradient-to-b from-blue-50 to-purple-100 py-16 px-6 ">
      <div className="flex flex-col">
        <p className="text-2xl font-bold text-[#5555FF]">ASK QUESTION</p>
        <h2 className="text-3xl sm:text-4xl font-bold  mb-10">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="  mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full cursor-pointer">
            {/* Question */}
            <button
              className="flex justify-between items-center w-full text-left text-[18px] cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="text-sm font-[400] font-dmSans">
                {faq.question}
              </div>
              <div>{openIndex === index ? <Minus /> : <Plus />}</div>
            </button>

            {/* Answer (Collapsible) */}
            <div
              className={`text-[14px] w-full transition-all overflow-hidden cursor-pointer ${
                openIndex === index ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-[#888888] text-sm">{faq.answer}</p>
            </div>
            <div className="h-[1px] bg-[#DFDFDF] w-full mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
