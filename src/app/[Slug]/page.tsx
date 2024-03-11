import React from "react";
import membersData from "@/app/../../database/members.json";
import Member from "@/app/../../database/type";
import Image from "next/image";
import Link from "next/link";
import icon from "@/app/../../public/whatsaap.jpeg";

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

  const memberData = membersData.find((member) => member.Slug === Slug);

  return (
    <div className="flex w-full justify-center">
      {memberData ? (
        <div>
          <li key={memberData.Slug} className="p-1 m-2 md:p-6 md:h-[400px]">
            <iframe
              src={memberData.PostLink}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; "
              width={300}
              height={230}
            ></iframe>
            <p className="text-sm text-1xl text-gray-100 font-semibold">
              {memberData.Name}
            </p>
            <p className="text-sm text-white h-12 overflow-auto">
              {memberData.area}
            </p>
            <p className="text-1xl bg-white rounded-full p-3   flex justify-center hover:scale-105 ">
              <Image src={icon} width={35} height={20} alt="icon" />
              <Link
                href={memberData.WhatsaapNumber}
                className="font-semibold text-lg text-green-500 "
              >
                {memberData.contactNumber}
              </Link>
            </p>
          </li>
        </div>
      ) : (
        <div>Member not found</div>
      )}
    </div>
  );
};

export default Page;
