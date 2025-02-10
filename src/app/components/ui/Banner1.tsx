import Image from "next/image";
import React from "react";
import banner1 from "../../../../public/banner1.jpg";
import banner2 from "../../../../public/banner2.jpg";

function Banner() {
  return (
    <main className="w-full pt-[19rem] md:pt-44">
      <div className="md:flex justify-center my-2">
        <div>
          <Image src={banner2} width={500} height={300} alt="banner2" />
        </div>
        <div>
          <Image src={banner1} width={500} height={300} alt="banner1" />
        </div>
      </div>
      
    </main>
  );
}

export default Banner;
