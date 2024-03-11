import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OMYS Fund Collection Charmains",
  description: "this app is create by OMYS Fund Collection members data for online and one click easy use and searchable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" max-w-7xl flex justify-center content-center h-svh min-w-[250px] text-center bg-teal-500">
        <div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
