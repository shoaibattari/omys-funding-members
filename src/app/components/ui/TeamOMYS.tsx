import React from "react";
import Image from "next/image";
import PanelData from "../../../../database/Panel.json";
import Link from "next/link";
import TeamCard from "../MemberCard/TeamCard";

function TeamOMYS() {
  return (
    <main className="py-6 w-full">
      <h2 className="text-3xl text-golden md:text-5xl font-semibold uppercase mt-10 text-center">
        TEAM OMYS 2024-25
      </h2>
      <div className="flex flex-wrap justify-around py-4 gap-4">
        {PanelData.map((Panel, index) => (
          <TeamCard key={index} Panel={Panel} />
        ))}
      </div>
    </main>
  );
}

export default TeamOMYS;
