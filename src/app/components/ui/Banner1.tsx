import Image from "next/image";
import React from "react";
import banner1 from "../../../../public/banner2025.jpg";

function Banner() {
  return (
    <main className="w-full pt-12">
      <div className="md:flex justify-center gap-4 items-center my-2">
        <div>
          <video
            width="1200"
            height="1200"
            autoPlay
            muted
            loop
            controls
            className="w-full h-auto "
          >
            <source src="/omysVideo.mp4" type="video/mp4" />
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
          <Image
            src={banner1}
            width={500}
            height={300}
            alt="banner1 "
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}

export default Banner;
