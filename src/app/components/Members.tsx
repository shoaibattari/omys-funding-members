"use client";
import React, { useState } from "react";
import membersData from "@/app/../../database/members.json";
import Member from "@/app/../../database/type";
import OMYSLogo from "@/app/../../public/OMYS-Logo.png";
import Image from "next/image";
import Banner from "./ui/Banner1";
import FundingMemberCard from "./MemberCard/FundingMemberCard";

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
      <div className=" bg-primary/95 fixed right-0 left-0 top-0 w-full flex  md:flex-row justify-between items-center  drop-shadow-2xl">
        <Image
          src={OMYSLogo}
          width={120}
          height={120}
          alt="icon"
          className=" mx-auto w-24 h-32"
        />
        <div className="flex flex-col md:flex-row w-full">
          <div className=" w-full mx-auto p-2">
            <label className=" hidden  md:text-2xl text-golden">
              Name Search:
            </label>
            <input
              type="text"
              placeholder="Search by name"
              value={nameSearch}
              onChange={handleNameSearch}
              className=" p-2 md:p-4 text-xl focus:none  rounded-3xl w-full"
            />
          </div>

          <div className="w-full mx-auto p-2">
            <label className="  hidden  md:text-2xl px-3  text-golden">
              Town Search:
            </label>
            <select
              value={townSearch}
              onChange={handleTownSearch}
              className="p-2 md:p-4 mr-3 focus:none text-xl rounded-3xl w-full"
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
      </div>
      <div>
        <Banner />
        <ul className=" grid justify-center items-start gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredMembers.map((member, index) => (
            <FundingMemberCard key={index} member={member} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Members;
