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
    <div className="flex justify-center">
      {memberData ? (
        <div>
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fytnmedia%2Fposts%2Fpfbid0UbMjMW6qdSP53jgYEBDzRiMTHqDBYVfX5e4rHYF8zWUyaWTKimU5fzDExGTjU7qJl&show_text=false&width=500"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; "
            width={350}
            height={300}
          ></iframe>
          <h1 className="text-1xl text-gray-700 font-semibold">
            {memberData.Name}
          </h1>
          <p className="text-1xl text-black flex justify-center hover:scale-105">
            <Image src={icon} width={20} height={20} alt="icon" />
            <Link
              href="https://wa.me/+923143565882"
              className="font-semibold text-green-500 "
            >
              {memberData.contactNumber}
            </Link>
          </p>
          <p className="text-sm text-blue-500">{memberData.area}</p>
        </div>
      ) : (
        <div>Member not found</div>
      )}
    </div>
  );
};

export default Page;
