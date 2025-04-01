"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide Icons for Hamburger

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"
      } px-6 md:px-12 lg:px-36 py-4`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-semibold">KLASS ART</div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-12">
          {/* Navigation Links */}
          <div className="flex gap-8 font-medium">
            <div className="cursor-pointer hover:text-gray-500">Services</div>
            <div className="cursor-pointer hover:text-gray-500">Products</div>
            <div className="cursor-pointer hover:text-gray-500">
              Subscription
            </div>
            <div className="cursor-pointer hover:text-gray-500">Dashboard</div>
          </div>

          {/* Login & Sign Up Buttons */}
          <div className="flex gap-6 items-center">
            <div className="cursor-pointer hover:text-gray-500">Login</div>
            <button
              className={`cursor-pointer bg-transparent border-2  ${
                scrolled ? "border-blue" : "border-white"
              } px-6 py-3 rounded-4xl transition-all duration-300 hover:bg-white hover:text-black`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden  block cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white text-black p-6 lg:hidden flex flex-col gap-4 shadow-lg">
          <div className="cursor-pointer hover:text-gray-500">Services</div>
          <div className="cursor-pointer hover:text-gray-500">Products</div>
          <div className="cursor-pointer hover:text-gray-500">Subscription</div>
          <div className="cursor-pointer hover:text-gray-500">Dashboard</div>
          <div className="cursor-pointer hover:text-gray-500">Login</div>
          <button className="cursor-pointer bg-black text-white px-6 py-3 rounded-4xl transition-all duration-300 hover:bg-gray-800">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};
