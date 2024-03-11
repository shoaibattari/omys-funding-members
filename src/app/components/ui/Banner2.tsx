import React from "react";
import Image from "next/image";
import PanelData from "../../../../database/Panel.json"
import icon from "@/app/../../public/whatsaap.jpeg";
import Link from "next/link";





function Banner2() {
  return (
    <main className="mb-2">
      <h2 className="text-3xl text-orange-100 md:text-2xl font-semibold uppercase mt-10 text-center">
        TEAM OMYS 2024-25
      </h2>
      <div className="flex md:flex-shrink-0 flex-wrap justify-center content-center">
        {PanelData.map((Panel) => (
          <div
            className="xl:px-10 lg:px-10 md:px-8 px-7 mr-3 ml-3 mt-10 
            box-border border-1 drop-shadow-2xl cursor-pointer  "
            key={Panel.contactNumber}
          >
            <div className="px-10 xl:mx-4 lg;mx-4 ">
              <Image
                src={Panel.Image}
                width={200}
                height={200}
                alt={Panel.Name}
                className="h-50 w-70  rounded-full"
              />
            </div>

            <h3 className="text-2xl font-semibold  leading-7 tracking-tight text-gray-100">
              {Panel.Name}
            </h3>
            <p className="text-lg font-semibold leading-6  text-gray-300">
              {Panel.Design}
            </p>
            <p className="text-1xl bg-white rounded-full p-1   flex justify-center hover:scale-105  ">
                <Image src={icon} width={20} height={20} alt="icon" />
                <Link
                  href={Panel.WhatsaapNumber}
                  className="font-semibold text-lg text-green-500 "
                >
                  {Panel.contactNumber}
                </Link>
              </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Banner2;
