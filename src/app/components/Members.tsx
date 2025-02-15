"use client";
import React, { useState } from "react";
import membersData from "@/app/../../database/members.json";
import Link from "next/link";
import Member from "@/app/../../database/type";
import icon from "@/app/../../public/whatsaap.jpeg";
import OMYSLogo from "@/app/../../public/OMYS-Logo.png";

import Image from "next/image";
import Banner from "./ui/Banner1";

const Members: React.FC = () => {
  const [nameSearch, setNameSearch] = useState("");
  const [townSearch, setTownSearch] = useState("");
  const [filteredMembers, setFilteredMembers] = useState<Member[]>(membersData);

  const handleNameSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setNameSearch(query);

    const filtered = membersData.filter((member) =>
      member.Name.toLowerCase().includes(query)
    );
    setFilteredMembers(filtered);
  };

  const handleTownSearch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const query = e.target.value.toLowerCase();
    setTownSearch(query);

    const filtered = membersData.filter((member) =>
      member.Town.toLowerCase().includes(query)
    );
    setFilteredMembers(filtered);
  };

  const towns = Array.from(new Set(membersData.map((member) => member.Town)));

  return (
    <main>
      <div className=" bg-primary/95 fixed w-full md:flex justify-between items-center  drop-shadow-2xl">
        <Image
          src={OMYSLogo}
          width={120}
          height={120}
          alt="icon"
          className=" mx-auto "
        />
        <div className=" w-full mx-auto p-2">
          <label className="hidden text-2xl text-gray-900">Name Search:</label>
          <input
            type="text"
            placeholder="Search by name"
            value={nameSearch}
            onChange={handleNameSearch}
            className="p-4 text-xl focus:none  rounded-3xl w-full"
          />
        </div>

        <div className="w-full mx-auto p-2">
          <label className="hidden  text-2xl px-3  text-gray-100">
            Town Search:
          </label>
          <select
            value={townSearch}
            onChange={handleTownSearch}
            className="p-4 mr-3 focus:none text-xl rounded-3xl w-full"
          >
            <option value="" className="text-gray-900">
              Select Town
            </option>
            {towns.map((town, index) => (
              <option key={index} value={town.toLowerCase()}>
                {town}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <Banner />
        <ul className=" grid gap-8 mx-2 md:mx-8 md:grid-cols-3 py-4   ">
          {filteredMembers.map((member, index) => (
            <li
              key={index}
              className="h-fit flex flex-col justify-center gap-2 "
            >
              <Image
                className="w-full h-full object-contain rounded-3xl min-h-[30rem] "
                alt={member.Name}
                src={member.image || "/omys.png"}
                width={700}
                height={500}
              />
              <Link
                href={`/${member.Slug}`}
                className="text-2xl h-14 text-white font-semibold"
              >
                {member.Name}
              </Link>
              <p className="text-lg md:text-xl pb-2 text-nowrap text-golden font-semibold">
                {member.area}
              </p>
              <div className=" bg-white rounded-full p-3   flex items-center justify-center">
                <Image src={icon} width={35} height={20} alt="icon" />
                <Link
                  href={member.WhatsaapNumber}
                  className=" text-xl font-bold text-primary"
                >
                  {member.contactNumber}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Members;
