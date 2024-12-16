import React from 'react'
import Image from 'next/image'
import Button from './button'

function Featured() {
  return (
    <div className="mt-32 wrapper">
    <div className="max-w-full lg:max-w-[1344px] h-auto mx-auto">
      <div className="text-xl font-normal text-[23px]">Featured</div>
      <div>
        <Image src="/feature.png" alt="feature" width={1000} height={1000} className="w-full h-auto mt-5" />
      </div>
  
      <div className="w-full lg:w-[1008px] h-[177px] flex items-center justify-center mt-8">
        <div className="w-full lg:w-[806px] h-[60px] flex items-center justify-center wrapper">
          <div className="text-[32px] lg:text-[54px] font-medium text-center ">STEP INTO WHAT FEELS GOOD</div>
        </div>
      </div>
  
      <div className="w-full lg:w-[473px] h-[24px] text-center mx-auto font-normal text-[12px] lg:text-[15px]">
        Cause everyone should know the feeling of running in that perfect pair.
      </div>
  
      <div className="text-center mt-5">
        <Button btnText="Find Your Shoe" bgColor="bg-[#111111]" />
      </div>
    </div>
  </div>
  
  
  )
}

export default Featured
