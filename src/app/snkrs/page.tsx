import React from "react";
import Image from "next/image";
import Button from "../../app/components/button";
import { FaCartArrowDown } from "react-icons/fa";

function Snkrs() {
  return (
    <div className="wrapper mt-12 px-4 sm:px-8 lg:mt-36">
     
      <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-10">
        
        <div className="w-full max-w-[653px]">
          <Image
            src={"/Rectangle.png"}
            alt="Rectangle"
            width={653}
            height={653}
            className="w-full rounded-lg"
          />
        </div>

        
        <div className="w-full max-w-[376px] space-y-6 text-center lg:text-left">
          
          <h1 className="font-medium text-[24px] sm:text-[36px] lg:text-[48px] leading-tight">
            Nike Air Force 1 PLT.AF.ORM
          </h1>
         
          <p className="text-[14px] sm:text-[15px] text-gray-800 leading-relaxed">
            Turn style on its head with this crafted take on the Air Jordan 1
            Mid. Its "inside out"-inspired construction, including unique
            layering and exposed foam accents, ups the ante on this timeless
            Jordan Brand silhouette. Details like the deco stitching on the
            Swoosh add coveted appeal, while the unexpected shading, rich
            mixture of materials and aged midsole aesthetic give this release
            an artisan finish.
          </p>
          
          <div className="font-medium text-[24px] sm:text-[28px] lg:text-[36px] text-gray-900">
            ₹ 8,695.00
          </div>
         
          <div className="flex justify-center lg:justify-start items-center gap-4">
            <FaCartArrowDown className="cursor-pointer text-xl sm:text-2xl text-gray-900" />
            <Button btnText="Add To Cart" bgColor="bg-[#111111]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snkrs;
