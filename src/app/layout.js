"use client";
import { DM_Sans, Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Open_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-openSans", // ✅ Define the CSS variable
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dmSans", // ✅ Define the CSS variable
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins", // ✅ Define the CSS variable
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"], // Add the required weights
  variable: "--font-inter", // ✅ Define the CSS variable
});
// Loading Component (Hard Loading for 3 Seconds)
const LoadingScreen = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-white">
    <motion.div
      className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
    <p className="mt-4 text-[black] font-semibold">Loading...</p>
  </div>
);
// px-6 md:px-12 lg:px-36 py-4
export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="ensa">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${inter.variable} antialiased ${openSans.variable} ${dmSans.variable}`}
      >
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Nav />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
