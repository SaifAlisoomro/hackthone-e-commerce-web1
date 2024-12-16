"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaSearch,
  FaHeart,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="wrapper">
        <div className="bg-primaryColor flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
          <Image src="/Frame.png" alt={""} width={24} height={24} />

          <div className="flex md:gap-4 sm:gap-3 gap-2">
            <Link href="/" className="hover:text-gray-800">
              Home
            </Link>
            <Link href="#" className="hover:text-gray-800">
              Find Link Store
            </Link>
            <Link href="/find" className="hover:text-gray-800">
              Help
            </Link>
            <Link href="/join-us" className="hover:text-gray-800">
              Join Us
            </Link>
            <Link href="/signup" className="hover:text-gray-800">
              Sign In
            </Link>
          </div>
        </div>

        <div className="justify-between items-center px-6 py-4 lg:flex hidden">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Nike Logo"
              width={100}
              height={100}
              className="md:w-[78px] sm:w-[60px] w-[30px]"
            />
          </div>

          <nav className="flex gap-4 md:gap-6 text-gray-700 font-medium md:text-[16px] sm:text-[14px] text-[10px]">
            <Link href="/new" className="hover:text-black whitespace-nowrap">
              New & Featured
            </Link>
            <Link href="/men" className="hover:text-black whitespace-nowrap">
              Men
            </Link>
            <Link href="/gear" className="hover:text-black whitespace-nowrap">
              Women
            </Link>
            <Link href="#" className="hover:text-black whitespace-nowrap">
              Kids
            </Link>
            <Link href="#" className="hover:text-black whitespace-nowrap">
              Sale
            </Link>
            <Link href="/snkrs" className="hover:text-black whitespace-nowrap">
              SNKRS
            </Link>
          </nav>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="relative hidden md:block">
              <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
              />
            </div>
            <FaHeart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
            <FaShoppingBag className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
          </div>
        </div>

        <div className="lg:hidden flex items-center justify-between px-6 py-4">
          <Image
            src="/logo.png"
            alt="Nike Logo"
            width={60}
            height={60}
            className="sm:w-[40px] w-[30px]"
          />
          <FaBars
            className="text-gray-700 text-2xl cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          />
        </div>
      </header>

      {isSidebarOpen && (
        <aside className="fixed inset-0 bg-gray-800 bg-opacity-90 z-50">
          <div className="relative h-full w-[250px] bg-primaryColor text-white">
            <FaTimes
              className="absolute top-4 right-4 text-2xl cursor-pointer"
              onClick={() => setIsSidebarOpen(false)}
            />

            <nav className="mt-8 flex flex-col gap-4 px-6 text-sm">
              <Link href="/new" className="hover:text-gray-300">
                New & Featured
              </Link>
              <Link href="/men" className="hover:text-gray-300">
                Men
              </Link>
              <Link href="/gear" className="hover:text-gray-300">
                Women
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Kids
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Sale
              </Link>
              <Link href="/snkrs" className="hover:text-gray-300">
                SNKRS
              </Link>
            </nav>

            <div className="absolute bottom-4 left-4">
              <p className="text-xs">© 2024 Your Nike</p>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}

export default Navbar;
