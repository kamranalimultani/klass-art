import React from "react";

export const PricingSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-purple-100 py-16 px-6 ">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-sm font-semibold text-blue-600 tracking-wide">
          PRICING PLANS
        </h3>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Experience AI Without Limits
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Go beyond basic AI tools with our Pro and Premium plans for
          high-quality image generation and customization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative mt-24">
        <div className="bg-white shadow-lg rounded-3xl p-8 py-12">
          <div className="flex gap-2">
            <img className="w-16 h-16" src="/Group 39522.png" />
            <div className="">
              <p className="text-[#6F6C90]">Free Plan</p>
              <p className="font-openSans text-2xl font-bold text-gray-900 ">
                Basic Access
              </p>
            </div>
          </div>
          <p className="text-gray-500 text-sm my-6">
            Best for casual users who want to try AI-generated images with basic
            features.
          </p>
          <p className="text-6xl font-black text-[#5555FF] mt-4">
            ₹0.00{" "}
            <span className="text-sm text-gray-500 font-light">/monthly</span>
          </p>
          <p className="text-black font-bold">What’s included</p>
          <ul className="mt-4 text-left text-gray-600 space-y-2">
            <li className="flex items-center text-sm my-3">
              <span className="text-blue-600">
                <img className="mr-2" src="/Check Circle Icon.png" />
              </span>{" "}
              Limited AI image generations
            </li>
            <li className="flex items-center text-sm my-3">
              <span className="text-blue-600">
                <img className="mr-2" src="/Check Circle Icon.png" />
              </span>{" "}
              Watermarked images
            </li>
            <li className="flex items-center text-sm my-3">
              <span className="text-blue-600">
                <img className="mr-2" src="/Check Circle Icon.png" />
              </span>{" "}
              Basic resolution output
            </li>
            <li className="flex items-center text-sm my-3">
              <span className="text-blue-600">
                <img className="mr-2" src="/Check Circle Icon.png" />
              </span>{" "}
              Limited text extraction
            </li>
          </ul>
          <div className="text-center">
            <button className="mt-6 w-[80%]  bg-gradient-to-b from-[#C289FF] to-purple-600 text-white py-4 rounded-lg">
              Start for Free
            </button>
          </div>
        </div>
        <div className="md:transform md:-translate-y-12 bg-[linear-gradient(-120deg,_#5555FF,_#C289FF)] text-white shadow-lg rounded-3xl p-8 py-12">
          <div className="flex gap-2  relative">
            <img className="w-16 h-16" src="/Group 39523.png" />
            <div className="">
              <p className="text-white">Pro Plan</p>
              <p className="font-openSans text-2xl font-bold text-white ">
                Best for Creators
              </p>
            </div>
            <div className="absolute px-8 py-2 bg-white/20 right-0 -top-5 rounded-lg">
              Popular
            </div>
          </div>
          <p className="text-gray-200 text-sm my-6">
            Content creators, designers, and users who need more flexibility.
          </p>
          <p className="text-6xl font-black text-white mt-4">
            ₹499{" "}
            <span className="text-sm text-gray-200 font-light">/monthly</span>
          </p>
          <p className="text-white font-bold">What’s included</p>
          <ul className="mt-4 text-left text-white space-y-2">
            <li className="flex items-center text-sm my-3">
              <span className="text-blue-600">
                <img className="mr-2" src="/Check Circle 2.png" />
              </span>{" "}
              Unlimited AI image generations
            </li>
            <li className="flex items-center text-sm my-3">
              <span className="text-blue-600">
                <img className="mr-2" src="/Check Circle 2.png" />
              </span>{" "}
              High-resolution images
            </li>
            <li className="flex items-center text-sm my-3">
              <span className="text-blue-600">
                <img className="mr-2" src="/Check Circle 2.png" />
              </span>{" "}
              No watermark on generated images
            </li>
            <li className="flex items-center text-sm my-3">
              <span className="text-blue-600">
                <img className="mr-2" src="/Check Circle 2.png" />
              </span>
              Access to multiple styles
            </li>
          </ul>
          <div className="text-center">
            <button className="mt-6 w-[80%] bg-white   text-purple-900 py-4 rounded-lg">
              Get started
            </button>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-3xl p-8 py-12">
          <div className="flex gap-2">
            <img className="w-16 h-16" src="/Group 39524.png" />
            <div className="">
              <p className="text-[#6F6C90]">Premium Plan</p>
              <p className="font-openSans text-2xl font-bold text-gray-900 ">
                For Professionals
              </p>
            </div>
          </div>
          <p className="text-gray-500 text-sm my-6">
            Best for: Businesses, agencies, and professionals who need AI
            without limits.
          </p>
          <p className="text-6xl font-black text-[#5555FF] mt-4">
            ₹999{" "}
            <span className="text-sm text-gray-500 font-light">/monthly</span>
          </p>
          <p className="text-black font-bold">What’s included</p>
          <ul className="mt-4 text-left text-gray-600 space-y-2">
            <li className="flex items-center text-sm my-3">
              <span className="text-blue-600">
                <img className="mr-2" src="/Check Circle Icon.png" />
              </span>{" "}
              Unlimited AI image generations
            </li>
            <li className="flex items-center text-sm my-3">
              <span className="text-blue-600">
                <img className="mr-2" src="/Check Circle Icon.png" />
              </span>{" "}
              Ultra HD & 4K resolution outputs
            </li>
            <li className="flex items-center text-sm my-3">
              <span className="text-blue-600">
                <img className="mr-2" src="/Check Circle Icon.png" />
              </span>{" "}
              No limits – full commercial rights.
            </li>
            <li className="flex items-center text-sm my-3">
              <span className="text-blue-600">
                <img className="mr-2" src="/Check Circle Icon.png" />
              </span>{" "}
              Enhanced product placement.
            </li>
          </ul>
          <div className="text-center">
            <button className="mt-6 w-[80%]  bg-gradient-to-b from-[#C289FF] to-purple-600 text-white py-4 rounded-lg">
              Start for Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
