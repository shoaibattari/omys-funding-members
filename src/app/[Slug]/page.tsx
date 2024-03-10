import React from "react";
import membersData from "@/app/../../database/members.json";

interface Props {
  params: { Slug: string };
}

const Page: React.FC<Props> = ({ params }) => {
  const { Slug } = params;

  const memberData = membersData.find((member) => member.Slug === Slug);

  return (
    <div>
      {memberData ? (
        <div>
          <h1>{memberData.Name}</h1>
          <h1>{memberData.contactNumber}</h1>
          <h1>{memberData.area}</h1>
          <h1>{memberData.Town}</h1>
        </div>
      ) : (
        <div>Member not found</div>
      )}
    </div>
  );
};

export default Page;
