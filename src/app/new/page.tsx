import React from "react";
import { PiSlidersHorizontal } from "react-icons/pi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from "next/image";

function Allproducts() {
  return (
    <>
    
      <div className="w-[1440] h-[51px] top-[16px] bg-[#FFFFFF] mt-32">
        <div className="w-[1344px] h-[36px] left-[48px]  wrapper">
          <div className="flex justify-between items-center">
            <div className="font-medium text-[24px]">New (500)</div>
            <div className="flex items-center">
              <div className="w-[137.91px] h-[28px] flex items-center gap-3">
                <span className="font-normal text-[16px]">Hide Filters</span>
                <PiSlidersHorizontal />
              </div>
              <div className="w-[86.47px] h-[28px] flex items-center gap-3">
                <span className="font-normal text-[15px]">
                  Sort By <IoIosArrowDown />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] h-[18013px] top-[82] wrapper ">
        <div className="flex justify-between">
          <div className="w-[260px] h-[849px] ">
            <div className="w-[192px] h-[2145.72px] left-[48px]">
              <div>
                {" "}
                <span className="font-medium text-[15px]">Shoes</span>
              </div>
              <div>
                {" "}
                <span className="font-medium text-[15px]">Sports Bras</span>
              </div>
              <div>
                <span className="font-medium text-[15px]">Tops & T-Shirts</span>
              </div>
              <div>
                <span className="font-medium text-[15px]">
                  Hoodies & Sweatshirts
                </span>
              </div>
              <div>
                {" "}
                <span className="font-medium text-[15px]">Jackets</span>
              </div>
              <div>
                {" "}
                <span className="font-medium text-[15px]">
                  Trousers & Tights
                </span>
              </div>
              <div>
                <span className="font-medium text-[15px]">Shorts</span>
              </div>
              <div>
                {" "}
                <span className="font-medium text-[15px]">Tracksuits</span>
              </div>
              <div>
                <span className="font-medium text-[15px]">
                  Jumpsuits & Rompers
                </span>
              </div>
              <div>
                {" "}
                <span className="font-medium text-[15px]">
                  Skirts & Dresses
                </span>
              </div>
              <div>
                {" "}
                <span className="font-medium text-[15px]">Socks</span>
              </div>
              <div>
                <span className="font-medium text-[15px]">
                  Accessories & Equipment
                </span>
              </div>
              <div className="w-[192px] h-[1705px] top-[440.72px] ">
                <div className="w-[188.16px] h-[48px] top-[1px] mt-5 flex justify-between items-center gap-3">
                  {" "}
                  <span className="font-medium text-[16px]">Gender</span>
                  <IoIosArrowUp />
                </div>
                <div>
                  {" "}
                  <label>
                    <input type="checkbox" /> Men
                  </label>
                </div>
                <div>
                  {" "}
                  <label>
                    <input type="checkbox" /> Women
                  </label>
                </div>
                <div>
                  {" "}
                  <label>
                    <input type="checkbox" /> Unisex
                  </label>
                </div>

                <hr className="w-[160px] h-[1px] m-auto mt-5 bg-gray-400" />

                <div className="w-[188.16px] h-[48px] top-[1px] mt-5 flex justify-between items-center gap-3">
                  {" "}
                  <span className="font-medium text-[16px]">Kids</span>
                  <IoIosArrowUp />
                </div>
                <div>
                  {" "}
                  <label>
                    <input type="checkbox" /> Boys
                  </label>
                </div>
                <div>
                  {" "}
                  <label>
                    <input type="checkbox" /> Girls
                  </label>
                </div>
                <hr className="w-[160px] h-[1px] m-auto mt-5 bg-gray-400" />

                <div className="w-[188.16px] h-[48px] top-[1px] mt-5 flex justify-between items-center gap-3">
                  {" "}
                  <span className="font-medium text-[16px]">Shop by Price</span>
                  <IoIosArrowUp />
                </div>
                <div>
                  {" "}
                  <label>
                    <input type="checkbox" /> Under ₹ 2 500.00
                  </label>
                </div>
                <div>
                  {" "}
                  <label>
                    <input type="checkbox" /> ₹ 2 501.00 - ₹ 7 500.00
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1092px] h-auto left-[300px]  ">
            <div className="flex justify-between gap-3">
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (1).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Air Force 1 Mid '07
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Men's Shoes
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    1 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 10 795.00
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (2).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Court Vision Low Next Nature
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Men's Shoes
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    1 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 4 995.00
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (3).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Air Force 1 PLT.AF.ORM
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Women`s Shoes
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    1 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 8 695.00
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-3">
              <div className="w-[348px] h-[533px] lft-[8px]">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (4).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Air Force 1 React
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Men's Shoes
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    1 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 13 295.00
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (5).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Air Jordan 1 Elevate Low
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Women`s Shoes
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    1 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 11 895.00
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (7).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Standard Issue
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Women`s Basketball Jersey
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    1 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 2 895.00
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-3">
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts01 (1).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Promo Exclusion
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Dunk Low Retro SE
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Men`s Shoes
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    1 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 9 695.00
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (8).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Sustainable Materials
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Dri-FIT UV Hyverse
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Men`s Short-Sleeve Graphic Fitness Top
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    1 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 2 495.00
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (9).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Court Vision Low
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Men`s Shoes
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    1 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 5 695.00
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-3">
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (10).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Dri-FIT Ready
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Men`s Short-Sleeve Fitness Top
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    3 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 2 495.00
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproduct.png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike One Leak Protection: Period
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Women`s Mid-Rise 18cm (approx.) Biker Shorts
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    2 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 3 395.00
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (11).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Air Force 1 LV8 3
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Older Kids` Shoe
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    1 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 7 495.00
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-3">
              <div className="w-[348px] h-[533px] lft-[8px]">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (12).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Blazer Low Platform
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Women`s Shoes
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    1 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 8 195.00
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (13).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Air Force 1 '07
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Women`s Shoe
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    2 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 8 195.00
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (14).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Pro Dri-FIT
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Men`s Tight-Fit Sleeveless Top
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    1 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    Men's Tight-Fit Sleeveless Top
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-3">
              <div className="w-[348px] h-[533px] lft-[8px]">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (15).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Dunk Low Retro
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Men`s Shoes
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    1 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 8 695.00
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (16).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">Nike Air Max SC</div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Women`s Shoes
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    2 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 5 995.00
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (17).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Dri-FIT UV Miler
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Men`s Short-Sleeve Running Top
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    1 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 1 695.00
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-3">
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (18).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Air Max SYSTM
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Older Kids Shoes
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    1 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 6 495.00
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (20).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Alate All U
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Women`s Light-Support Lightly Lined U-Neck Printed Sports
                    Bra
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    1 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 2 195.00
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts01 (2).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Court Legacy Lift
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Women`s Shoes
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    2 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 7 495.00
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-3">
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Rectangle (23).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">Nike Swoosh</div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Women`s Medium-support Padded Sports Bra Tank
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    2 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 3 095.00
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (21).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike SB Zoom Janoski OG+
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Shoes
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    1 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 8 595.00
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (22).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Dri-FIT Run Division Rise 365
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Men's Running Tank
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    2 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 3 495.00
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-3">
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (23).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Dri-FIT Challenger
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Men`s 18cm (approx.) 2-in-1 Versatile Shorts
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    1 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 2 495.00
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (24).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Jordan Series ES
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Men`s Shoes
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    2 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 7 495.00
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (25).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Jordan Series ES
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Older Kids Oversized Woven Jacket
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    1 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 3 895.00
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-3">
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (26).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Sportswear Trend
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Older Kids (Girls) High-waisted Woven Shorts
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    2 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 2 495.00
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (27).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike Blazer Low '77 Jumbo
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Women`s Shoes
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    1 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 8 595.00
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[533px] lft-[8px] ">
                <div className="w-[348px] h-[348]">
                  <Image
                    src={"/Allproducts (29).png"}
                    alt="product"
                    width={348}
                    height={348}
                  />
                </div>
                <div className="w-[348px] h-[185px] top-[348px]">
                  <div className="font-medium text-[15px] text-[#9E3500]">
                    Just In
                  </div>
                  <div className="font-medium text-[15px]">
                    Nike SB Force 58
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    Skate Shoe
                  </div>
                  <div className="font-normal text-[15px] text-[#757575]">
                    1 Colour
                  </div>
                  <div className="font-medium text-[15px] ">
                    MRP : ₹ 5 995.00
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[1092px] h-[259px] top-[5592px] text-center">
              <div className="w-[171.42px] h-[22px] top-[62px] mt-32 ">
                <span className="font-medium text-[19px] ">
                  Related Categories
                </span>
              </div>

              <div className="flex justify-between items-center  mt-10">
                <div className="w-[160.83px] h-[34px] rounded-full border-2 border-inherit">
                  {" "}
                  <span className="font-normal text-[12px]">
                    Best Selling Products
                  </span>
                </div>
                <div className="w-[104.36px] h-[34px] rounded-full border-2 border-inherit">
                  {" "}
                  <span className="font-normal text-[12px]">Best Shoes</span>
                </div>
                <div className="w-[151.56px] h-[34px] rounded-full border-2 border-inherit">
                  {" "}
                  <span className="font-normal text-[12px]">
                    New Basketball Shoes
                  </span>
                </div>
                <div className="w-[160.83px] h-[34px] rounded-full border-2 border-inherit">
                  {" "}
                  <span className="font-normal text-[12px]">
                    New Football Shoes
                  </span>
                </div>
                <div className="w-[139.83px] h-[34px] rounded-full border-2 border-inherit">
                  {" "}
                  <span className="font-normal text-[12px]">
                    New Men`s Shoes
                  </span>
                </div>
                <div className="w-[153.08px] h-[34px] rounded-full border-2 border-inherit">
                  {" "}
                  <span className="font-normal text-[12px]">
                    New Running Shoes
                  </span>
                </div>
                <div className="w-[140.92px] h-[34px] rounded-full border-2 border-inherit">
                  {" "}
                  <span className="font-normal text-[12px]">
                    Best Men`s Shoes
                  </span>
                </div>
              </div>
              <div className="flex gap-5 items-center mt-10">
                <div className="w-[145.64px] h-[34px] rounded-full border-2 border-inherit">
                  {" "}
                  <span className="font-normal text-[12px]">
                    New Jordan Shoes
                  </span>
                </div>
                <div className="w-[159.11px] h-[34px] rounded-full border-2 border-inherit">
                  {" "}
                  <span className="font-normal text-[12px]">
                    Best Women`s Shoes
                  </span>
                </div>
                <div className="w-[159.11px] h-[34px] rounded-full border-2 border-inherit">
                  {" "}
                  <span className="font-normal text-[12px]">
                    Best Men`s Shoes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Allproducts;
