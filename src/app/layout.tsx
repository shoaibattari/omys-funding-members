import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/ui/Footer";

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
      <body className="bg-secondary px-2 md:px-4 max-w-[1500px] mx-auto">
        <div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
