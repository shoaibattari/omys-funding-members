import React from "react";
import membersData from "@/app/../../database/members.json";
import FundingMemberCard from "../../components/MemberCard/FundingMemberCard";
import Banner from "@/app/components/ui/Banner1";

interface Props {
  params: { Town: string };
}

// Generate Static Params for Town-based routing
export async function generateStaticParams() {
  const uniqueTowns = Array.from(
    new Set(membersData.map((member) => member.Town))
  );

  return uniqueTowns.map((Town) => ({
    Town: Town.replace(/\s+/g, "-").toLowerCase(), // Format Town as URL-friendly
  }));
}

const Page: React.FC<Props> = ({ params }) => {
  const { Town } = params;

  // Convert Town to match the format used in the database
  const formattedTown = Town.replace(/-/g, " "); // Convert URL-friendly Town back to normal

  // Filter members by Town
  const townMembers = membersData.filter(
    (member) => member.Town.toLowerCase() === formattedTown.toLowerCase()
  );

  return (
    <main className="w-full pt-12">
      <div className="text-center">
        <h2 className="text-2xl lg:text-5xl font-bold text-golden uppercase">
          Chairmans {formattedTown} Town
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center items-start gap-4 mt-8">
        {townMembers.length > 0 ? (
          townMembers.map((member) => (
            <FundingMemberCard key={member.Slug} member={member} />
          ))
        ) : (
          <p className="text-center col-span-full">
            No members found for this Town.
          </p>
        )}
      </div>
      <Banner />
    </main>
  );
};

export default Page;
