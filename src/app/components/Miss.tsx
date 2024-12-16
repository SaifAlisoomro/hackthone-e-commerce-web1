import React from 'react'
import Image from 'next/image'

function Miss() {
  return (
   <>
 <div className="w-full h-auto mt-36 wrapper">
  <div className="w-full text-[22px] font-medium m-5">Don`t Miss</div>
  
  <div className="w-full h-auto">
    <Image 
      src="/miss.png" 
      alt="Don't Miss" 
      width={1300} 
      height={1300} 
      className="w-full h-auto object-cover" 
    />
    <div className="w-full md:w-[1008px] h-auto flex flex-col md:flex-row justify-between items-center mt-8 mx-auto px-4">
      <div className="w-full md:w-[512px] text-center md:text-left wrapper">
        <div className="font-medium text-[32px] md:text-[52px]">FLIGHT ESSENTIALS</div>
        <div className="w-full md:w-[531px] font-normal text-[15px] mt-4">
          Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default Miss
