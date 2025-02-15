import Image from "next/image";
import React from "react";
import { Panel } from "../../../../database/type";
import icon from "@/app/../../public/whatsaap.jpeg";
import Link from "next/link";

interface TeamCardProps {
  Panel: Panel;
}

const TeamCard: React.FC<TeamCardProps> = ({ Panel }) => {
  return (
    <div className="flex  flex-col justify-center items-center border-2 border-golden w-96 bg-golden/20 rounded-2xl  py-4">
      <Image
        src={Panel.Image}
        width={200}
        height={200}
        alt={Panel.Name}
        className="h-50 w-50  rounded-full "
      />
      <h3 className="text-2xl flex items-center text-center font-semibold py-2 leading-7 tracking-tight text-white mx-2 h-14">
        {Panel.Name}
      </h3>
      <p className="text-xl font-bold my-2 leading-6  text-golden">
        {Panel.Design}
      </p>
      <p className="text-1xl bg-white rounded-full py-2 w-48  flex justify-center items-center hover:scale-105 duration-300  ">
        <Image src={icon} width={24} height={24} alt="icon" />
        <Link
          href={Panel.WhatsaapNumber}
          className="font-semibold text-lg text-primary "
        >
          {Panel.contactNumber}
        </Link>
      </p>
    </div>
  );
};

export default TeamCard;
