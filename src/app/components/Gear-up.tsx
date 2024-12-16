import React from 'react'
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';

function Gear() {
  return (
   <>
<div className="w-full h-auto mt-10">
  <div className="w-full text-[26px] font-semibold mb-10 wrapper">Gear Up</div>
  
  <div className="flex flex-wrap justify-between gap-6">
    <div className="w-full sm:w-full xl:w-[666px] wrapper h-auto bg-slate-100">
      <div className="w-full h-[48px] flex justify-between items-center p-4">
        <div className="text-left">Shop Men`s</div>
        <div className="flex space-x-2">
          <IoIosArrowBack className="bg-[#E5E5E5] rounded-full text-black " />
          <IoIosArrowForward className="bg-[#E5E5E5] rounded-full text-black " />
        </div>
      </div>
      <div className="flex flex-wrap justify-between p-4">
        <div className="w-full sm:w-full xl:w-[300px] h-auto">
          <Image src="/gear (1).png" alt="gear" width={400} height={400} />
          <div className="w-full h-[72px] mt-4">
            <div className="flex justify-between items-center">
              <div className="font-medium text-[12px]">
                Nike Dri-FIT ADV TechKnit Ultra
                <div className="font-normal text-[12px] text-[#757575] mt-1">
                  Men's Short-Sleeve Running Top
                </div>
              </div>
              <div className="font-medium text-[12px]">₹ 3,895</div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-full xl:w-[300px] h-auto">
          <Image src="/gear (2).png" alt="gear" width={400} height={400} />
          <div className="w-full h-[72px] mt-4">
            <div className="flex justify-between items-center">
              <div className="font-medium text-[12px]">
                Nike Dri-FIT Challenger
                <div className="font-normal text-[10px] text-[#757575] mt-1">
                  Men's 18cm (approx.) 2-in-1 Versatile Shorts
                </div>
              </div>
              <div className="font-medium text-[12px]">₹ 2,495</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="w-full sm:w-full xl:w-[666px] wrapper h-auto bg-slate-100">
      <div className="w-full h-[48px] flex justify-between items-center p-4">
        <div className="text-left">Shop Women`s</div>
        <div className="flex space-x-2">
          <IoIosArrowBack className="bg-[#E5E5E5] rounded-full text-black " />
          <IoIosArrowForward className="bg-[#E5E5E5] rounded-full text-black " />
        </div>
      </div>
      <div className="flex flex-wrap justify-between p-4">
        <div className="w-full sm:w-full xl:w-[300px] h-auto">
          <Image src="/women.png" alt="gear" width={400} height={400} />
          <div className="w-full h-[72px] mt-4">
            <div className="flex justify-between items-center">
              <div className="font-medium text-[12px]">
                Nike Dri-FIT ADV Run Division
                <div className="font-normal text-[12px] text-[#757575] mt-1">
                  Women`s Long-Sleeve Running Top
                </div>
              </div>
              <div className="font-medium text-[12px]">₹ 5,295</div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-full xl:w-[300px] h-auto">
          <Image src="/women1.png" alt="gear" width={400} height={400} />
          <div className="w-full h-[72px] mt-4">
            <div className="flex justify-between items-center">
              <div className="font-medium text-[12px]">
                Nike Fast
                <div className="font-normal text-[12px] text-[#757575] mt-1">
                  Women's Mid-Rise 7/8 Running Leggings with Pockets
                </div>
              </div>
              <div className="font-medium text-[12px]">₹ 3,795</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default Gear
