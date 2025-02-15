import Image from "next/image";
import React from "react";
import banner1 from "../../../../public/banner2025.jpg";
import banner2 from "../../../../public/banner2.jpg";

function Banner() {
  return (
    <main className="w-full pt-[19rem] md:pt-44">
      <div className="md:flex justify-center gap-4 items-center my-2">
        <div>
          <video
            width="1200"
            height="1200"
            autoPlay
            muted
            loop
            controls
            className="w-full h-auto mx-2 py-2"
          >
            <source src="omysVideo.mp4" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <Image src={banner1} width={500} height={300} alt="banner1 " />
          <Image src={banner1} width={500} height={300} alt="banner1 " />
        </div>
      </div>
    </main>
  );
}

export default Banner;
