import React from "react";
import membersData from "@/app/../../database/members.json";
import Member from "@/app/../../database/type";
import FundingMemberCard from "@/app/components/MemberCard/FundingMemberCard";

interface Props {
  params: { Slug: string };
}
export async function generateStaticParams() {
  const memberData: Member[] = membersData;

  return memberData.map((Name) => ({
    Name: Name,
  }));
}

const Page: React.FC<Props> = ({ params }) => {
  const { Slug } = params;

  const memberData = membersData.find((member) => member.Slug.toLocaleLowerCase() === Slug);

  return (
    <main className="w-full py-12">
      <div className="flex w-full justify-center items-center">
        <div>
          {memberData ? <FundingMemberCard member={memberData} /> : null}
        </div>
      </div>
      
    </main>
  );
};

export default Page;
