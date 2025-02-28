import Image from "next/image";
import Link from "next/link";
import React from "react";

const OperationalNumber = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-2">
      <p className="text-golden font-semibold pt-12 md:pt-0 text-center md:text-start">
        For Contributions And Inquiries, <br />
        <span className="text-white">
          {" "}
          Contact: Farooq Aswani{" "}
          <span className="md:hidden">
            <br />
          </span>{" "}
          (Operational Head)
        </span>
      </p>
      <div
        className="flex justify-center items-center gap-2 
      bg-white rounded-3xl p-2 md:mb-2 px-12 w-full md:w-fit hover:scale-105 duration-300"
      >
        <Image src={"/whatsaap.jpeg"} width={35} height={20} alt="icon" />
        <Link
          href={"https://wa.me/+923002172940"}
          className=" text-xl font-bold text-primary"
        >
          0300-2172940
        </Link>
      </div>
    </div>
  );
};

export default OperationalNumber;
