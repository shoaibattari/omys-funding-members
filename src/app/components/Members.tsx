"use client";
import React, { useState } from "react";
import membersData from "@/app/../../database/members.json";
import Link from "next/link";
import Member from "@/app/../../database/type"


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
    <div>
      <div>
        <label>Name Search:</label>
        <input
          type="text"
          placeholder="Search by name"
          value={nameSearch}
          onChange={handleNameSearch}
        />
      </div>

      <div>
        <label>Town Search:</label>
        <select value={townSearch} onChange={handleTownSearch}>
          <option value="">Select Town</option>
          {towns.map((town, index) => (
            <option key={index} value={town.toLowerCase()}>
              {town}
            </option>
          ))}
        </select>
      </div>

      <ul>
        {filteredMembers.map((member) => (
          <li key={member.Slug}>
            <Link href={`/${member.Slug}`}>{member.Name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Members;
