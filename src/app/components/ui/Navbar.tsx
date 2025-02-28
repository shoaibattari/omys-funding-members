"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import OperationalNumber from "./OperationalNumber";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define a constant array of navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Chairmans", href: "/members" },
    { name: "Towns", href: "/town" },
    // { name: "Developer", href: "https://shoaibmemon.vercel.app/" },
  ];

  return (
    <nav className="bg-[#0a2444] text-white shadow-lg">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Desktop Menu */}
          <div className="flex">
            <Link href="/">
              <Image
                src={"/OMYS-Logo.png"}
                width={120}
                height={120}
                alt="icon"
                className=" mx-auto w-24 h-32"
              />
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex justify-center items-center"
                >
                  <p className=" border-b-2 border-transparent hover:border-golden text-lg font-medium text-center cursor-pointer">
                    {link.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <OperationalNumber />
          </div>
          {/* Mobile Menu Button */}
          <div className="flex items-center justify-center md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-primary border border-golden"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <IoClose className="text-2xl" />
              ) : (
                <GiHamburgerMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className=" flex flex-col h-svh gap-6 pt-12 justify-start items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                <span className=" px-3 py-2 text-white  text-xl font-medium  cursor-pointer">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
