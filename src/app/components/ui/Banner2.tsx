import React from "react";
import Image from "next/image";
import PanelData from "../../../../database/Panel.json";
import icon from "@/app/../../public/whatsaap.jpeg";
import Link from "next/link";

function Banner2() {
  return (
    <main className="py-6 bg-golden/20">
      <h2 className="text-3xl text-golden md:text-5xl font-semibold uppercase mt-10 text-center">
        TEAM OMYS 2024-25
      </h2>
      <div className="flex flex-wrap justify-around py-4 gap-2">
        {PanelData.map((Panel, index) => (
          <div key={index} className="flex  flex-col justify-center items-center w-96 bg-golden/20 rounded-2xl  py-4">
            <Image
              src={Panel.Image}
              width={200}
              height={200}
              alt={Panel.Name}
              className="h-50 w-50  rounded-full "
            />
            <h3 className="text-2xl font-semibold py-2 leading-7 tracking-tight text-white mx-2 h-14">
              {Panel.Name}
            </h3>
            <p className="text-xl font-bold my-2 leading-6  text-golden">
              {Panel.Design}
            </p>
            <p className="text-1xl bg-white rounded-full py-2 w-48  flex justify-center items-center hover:scale-105  ">
              <Image src={icon} width={24} height={24} alt="icon" />
              <Link
                href={Panel.WhatsaapNumber}
                className="font-semibold text-lg text-primary "
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
