import Image from "next/image";
import Link from "next/link";
import React from "react";
import icon from "../../../../public/whatsaap.jpeg";
import Member from "../../../../database/type";

interface MemberProps {
  member: Member;
}

const FundingMemberCard: React.FC<MemberProps> = ({ member }) => {
  return (
    <Link
      href={`/members/${member.Slug.toLocaleLowerCase()}`}
      className="flex flex-col bg-primary/40 rounded-3xl  justify-center items-center "
    >
      <Image
        className="w-full h-full object-contain rounded-3xl "
        alt={member.Name}
        src={member.image || "/omys.png"}
        width={700}
        height={700}
      />

      <p className="text-xl flex items-center px-2 justify-center lg:text-2xl h-16  text-center text-white font-semibold w-full">
        {member.Name}
      </p>
      <p className="text-lg md:text-xl px-2 text-center flex items-center justify-center h-16 w-full  text-golden font-semibold">
        {member.area}
      </p>
      <div
        className="flex justify-center items-center gap-2 
      bg-white rounded-3xl p-2 md:mb-2 px-12 w-full md:w-fit hover:scale-105 duration-300"
      >
        <Image src={icon} width={35} height={20} alt="icon" />
        <Link
          href={member.WhatsaapNumber}
          className=" text-xl font-bold text-primary"
        >
          {member.contactNumber}
        </Link>
      </div>
    </Link>
  );
};

export default FundingMemberCard;
