import React from "react";

const Banner = () => {
  return (
    <div className="w-full flex justify-center">
      <img
        src="/Banner.png"
        alt="CADD Centre Banner"
        className="w-full h-auto max-h-[800px] sm:max-h-[700px] md:max-h-[600px] lg:max-h-[650px] object-cover"
      />
    </div>
  );
};

export default Banner;
