import React from 'react';
import Image from 'next/image';

function Essential() {
  return (
    <div className="w-full h-auto mt-20 wrapper">
   
      <div className="text-[23px] font-medium m-5 text-center md:text-start">The Essential</div>

     
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      
        <div className="w-full h-auto bg-purple-400 overflow-hidden rounded-md">
          <Image
            src="/Essential (3).png"
            alt="Essential"
            width={450}
            height={550}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="w-full h-auto bg-purple-400 overflow-hidden rounded-md">
          <Image
            src="/Essential (1).png"
            alt="Essential"
            width={450}
            height={550}
            className="w-full h-auto object-cover"
          />
        </div>

       
        <div className="w-full h-auto bg-purple-400 overflow-hidden rounded-md">
          <Image
            src="/Essential (2).png"
            alt="Essential"
            width={450}
            height={550}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

     
      <div className="w-full h-auto mt-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
        
          <ul className="text-start">
            <span className="font-medium">Icons</span>
            <li className="font-normal text-[#757575]">Air Force 1</li>
            <li className="font-normal text-[#757575]">Huarache</li>
            <li className="font-normal text-[#757575]">Air Max 90</li>
            <li className="font-normal text-[#757575]">Air Max 95</li>
          </ul>

          
          <ul className="text-start">
            <span className="font-medium">Shoes</span>
            <li className="font-normal text-[#757575]">All Shoes</li>
            <li className="font-normal text-[#757575]">Custom Shoes</li>
            <li className="font-normal text-[#757575]">Jordan Shoes</li>
            <li className="font-normal text-[#757575]">Running Shoes</li>
          </ul>

         
          <ul className="text-start">
            <span className="font-medium">Clothing</span>
            <li className="font-normal text-[#757575]">All Clothing</li>
            <li className="font-normal text-[#757575]">Modest Wear</li>
            <li className="font-normal text-[#757575]">Hoodies & Pullovers</li>
            <li className="font-normal text-[#757575]">Shirts & Tops</li>
          </ul>

          <ul className="text-start">
            <span className="font-medium">Kids</span>
            <li className="font-normal text-[#757575]">Infant & Toddler Shoes</li>
            <li className="font-normal text-[#757575]">Kids Shoes</li>
            <li className="font-normal text-[#757575]">Kids Jordan Shoes</li>
            <li className="font-normal text-[#757575]">Kids Basketball Shoes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Essential;
