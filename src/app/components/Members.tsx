"use client";
import React, { useState } from "react";
import membersData from "@/app/../../database/members.json";
import Link from "next/link";
import Member from "@/app/../../database/type";
import icon from "@/app/../../public/whatsaap.jpeg";
import OMYSLogo from "@/app/../../public/OMYS-Logo.png";

import Image from "next/image";
import Banner from "./ui/Banner1";
import Banner2 from "./ui/Banner2";

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
      <div className=" bg-teal-500   p-3 md:flex justify-around md:rounded-3xl">
        <Image src={OMYSLogo} width={70} height={70} alt="icon" />
        <div className="m-3 ">
          <label className="hidden text-2xl px-3 text-gray-900">
            Name Search:
          </label>
          <input
            type="text"
            placeholder="Search by name"
            value={nameSearch}
            onChange={handleNameSearch}
            className="p-3  rounded-3xl w-full"
          />
        </div>

        <div className="m-3">
          <label className="hidden text-2xl px-3  text-gray-900">
            Town Search:
          </label>
          <select
            value={townSearch}
            onChange={handleTownSearch}
            className="p-3 rounded-3xl w-full"
          >
            <option value="" className="text-gray-900 ">
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
        <ul className=" grid justify-between md:grid-cols-3  ">
          {filteredMembers.map((member) => (
            <li key={member.Slug} className="p-1 m-2 md:p-6 md:h-[400px]">
              <iframe
                src={member.PostLink}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; "
                width={300}
                height={230}
              ></iframe>
              <p className="text-sm h-10 hover:scale-110 ">
                <Link
                  href={`/${member.Slug}`}
                  className="text-1xl hover:text-blue-100  text-gray-100 font-semibold"
                >
                  {member.Name}
                </Link>
              </p>
              <p className="md:text-1xl text-white md:h-12">{member.area}</p>
              <p className="text-1xl bg-white rounded-full p-3   flex justify-center hover:scale-105  ">
                <Image src={icon} width={35} height={20} alt="icon" />
                <Link
                  href={member.WhatsaapNumber}
                  className="font-semibold text-lg text-green-500 "
                >
                  {member.contactNumber}
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </div>

    </main>
  );
};

export default Members;
