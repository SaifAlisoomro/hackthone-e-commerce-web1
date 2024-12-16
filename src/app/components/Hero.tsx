import React from "react";
import Image from "next/image";
import Button from "./button";

function Hero() {
  return (
    <div className="w-full max-w-[1340px] h-auto mx-auto relative wrapper">
    <div className="relative wrapper">
      <Image
        src="/image.png"
        alt="Example image"
        width={1300}
        height={977}
        className="object-cover w-full h-auto "
      />
    </div>
    <div className="w-full max-w-[1008px] h-auto mt-10 mx-auto px-4">
      <div className="text-center mb-6">
        <div className="text-[56px] font-medium lg:text-[48px] md:text-[40px] sm:text-[32px]">
          NIKE AIR MAX PULSE
        </div>
        <div className="w-full max-w-[511px] mx-auto text-[15px] font-normal mt-4">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse — designed to push you past your limits and help you go to the
          max.
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-6 mb-5">
        <Button btnText="Notify Me" bgColor="bg-[#111111]" />
        <Button btnText="Shop Air Max" bgColor="bg-[#111111]" />
      </div>
    </div>
  </div>
  
  
  );
}

export default Hero;
