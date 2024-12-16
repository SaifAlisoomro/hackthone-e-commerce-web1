import React from 'react'
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import Image from 'next/image';

function Hero1() {
  return (
    <div className='wrapper'>
        <div className="w-full max-w-[1440px] mx-auto h-auto wrapper mt-28 mb-10 px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Title Section */}
      <div className="w-full md:w-[170.59px] h-[27px] font-medium text-[22px] border-2 border-black flex items-center justify-center md:justify-start">
        Best Of Air MaX
      </div>
  
      {/* Navigation Section */}
      <div className="flex items-center gap-3 mt-4 md:mt-0">
        <div>SHOP</div>
        <IoIosArrowBack className="cursor-pointer rounded-full bg-[#E5E5E5] " />
        <IoIosArrowForward className="cursor-pointer rounded-full bg-[#E5E5E5] " />
      </div>
    </div>
  
    <div className=" w-full h-auto mt-6">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-6 flex-wrap">
        {/* Product 1 */}
        <div className="w-full sm:w-[calc(33%-16px)] h-auto">
          <Image src={"/product (1).png"} alt="product" width={500} height={500} className="w-full h-auto" />
          <div className="mt-3">
            <div className="flex justify-between items-center">
              <div className="font-medium">Nike Air Max Pulse</div>
              <div className="font-medium">₹ 13 995</div>
            </div>
            <div className="font-normal text-[15px] text-[#757575]">Women's Show</div>
          </div>
        </div>
  
        {/* Product 2 */}
        <div className="w-full sm:w-[calc(33%-16px)] h-auto">
          <Image src={"/product (1).png"} alt="product" width={500} height={500} className="w-full h-auto" />
          <div className="mt-3">
            <div className="flex justify-between items-center">
              <div className="font-medium">Nike Air Max Pulse</div>
              <div className="font-medium">₹ 13 995</div>
            </div>
            <div className="font-normal text-[15px] text-[#757575]">Men's Show</div>
          </div>
        </div>
  
        {/* Product 3 */}
        <div className="w-full sm:w-[calc(33%-16px)] h-auto">
          <Image src={"/product (3).png"} alt="product" width={500} height={500} className="w-full h-auto" />
          <div className="mt-3">
            <div className="flex justify-between items-center">
              <div className="font-medium">Nike Air Max 97 SE</div>
              <div className="font-medium">₹ 13 995</div>
            </div>
            <div className="font-normal text-[15px] text-[#757575]">Women's Show</div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  
  )
}

export default Hero1
