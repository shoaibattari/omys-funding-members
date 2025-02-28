import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/ui/Footer";
import TeamOMYS from "./components/ui/TeamOMYS";
import Navbar from "./components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OMYS Fund Collection Charmains",
  description:
    "this app is create by OMYS Fund Collection members data for online and one click easy use and searchable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-secondary  max-w-[1700px] mx-auto">
        <div>
          <Navbar />
          <div className="px-4">
            {children}
            <TeamOMYS />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
