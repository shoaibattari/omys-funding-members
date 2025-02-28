import Link from "next/link";
import membersData from "../../../../database/members.json";
import React from "react";
import Image from "next/image";

const Towns = () => {
  const townCounts: Record<string, number> = {};
  membersData.forEach((member) => {
    townCounts[member.Town] = (townCounts[member.Town] || 0) + 1;
  });
  return (
    <div className="w-full max-w-7xl mx-auto px-6 pt-12 ">
      <h2 className="text-4xl font-extrabold text-center mb-6 text-golden drop-shadow-lg">
        Towns Wise Chairmans
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <Link
          href={`/members`}
          className="flex flex-col justify-between bg-secondary p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300 border border-golden"
        >
          <Image
            src={"/OMYS-Logo.png"}
            width={120}
            height={120}
            alt="icon"
            className=" w-32 h-32 absolute opacity-5 top-0 left-12 md:left-28 "
          />
          <p className="text-2xl font-bold cursor-pointer  text-white text-center">
            All Towns
          </p>
          <p className="mt-4 inline-block bg-golden text-primary px-4 py-2 rounded-full font-semibold text-lg text-center">
            {membersData.length} Members
          </p>
        </Link>
        {Object.entries(townCounts).map(([town, count]) => (
          <Link
            href={`/town/${town.replace(/\s+/g, "-").toLowerCase()}`}
            key={town}
            className="flex flex-col justify-between bg-secondary p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300 border border-golden"
          >
            <p className="text-2xl font-bold cursor-pointer  text-white text-center">
              {town}
            </p>
            <Image
              src={"/OMYS-Logo.png"}
              width={120}
              height={120}
              alt="icon"
              className=" w-32 h-32 absolute opacity-5 top-0 left-12 md:left-28 "
            />
            <p className="mt-4 inline-block bg-golden text-primary px-4 py-2 rounded-full font-semibold text-lg text-center">
              {count} Members
            </p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Towns;
