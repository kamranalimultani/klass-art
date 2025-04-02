import { DM_Sans, Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Open_Sans } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Klass Art",
  description: "Generate images",
};
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
// px-6 md:px-12 lg:px-36 py-4
export default function RootLayout({ children }) {
  return (
    <html lang="ensa">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${inter.variable} antialiased ${openSans.variable} ${dmSans.variable}`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
