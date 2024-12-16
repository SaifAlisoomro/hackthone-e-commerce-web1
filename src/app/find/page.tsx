import React from "react";
import { FaSearch } from "react-icons/fa";
import Button from "../../app/components/button";
import { IoIosThumbsUp,IoIosThumbsDown, } from "react-icons/io";
import Image from "next/image";
import { BiSolidMessageDots } from "react-icons/bi";
import { IoMailUnreadSharp } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";



function Find() {
  return (
    <>
    <div className="w-full h-auto relative mt-24 px-4 wrapper">
 
  <div className="w-full flex flex-col items-center">
    <div className="text-center mb-5">
      <span className="font-semibold text-[24px] md:text-[32px]">GET HELP</span>
    </div>
    <div className="relative hidden md:flex justify-center items-center w-full md:w-[457.33px]">
      <input
        type="text"
        placeholder="What can we help you with?"
        className="text-sm focus:outline-none border-2 border-[#757575] py-2 px-4 md:px-24 rounded-md text-left w-full"
      />
      <FaSearch className="absolute right-4 top-2.5 text-gray-500 text-[20px]" />
    </div>
  </div>

  {/* Main Content */}
  <div className="w-full mt-8 flex flex-col lg:flex-row">
    {/* Left Section */}
    <div className="w-full lg:w-[70%]  p-6">
      {/* FAQ Content */}
      <div className="mb-6">
        <h2 className="text-lg md:text-xl font-medium">
          WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
        </h2>
        <p className="text-sm mt-4">
          We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
        </p>
        <ul className="list-disc pl-5 mt-3 text-sm">
          <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
          <li>
            If you enter your PAN information at checkout, you`ll be able to pay for your order with PayTM or a local credit or debit card.
          </li>
          <li>Apple Pay</li>
        </ul>
      </div>

      <div className="text-sm mt-6">
        <p>
          <span className="font-medium underline">NIKE Member</span> can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member,{" "}
          <span className="underline">join</span> us today.
        </p>
        <div className="mt-5 flex items-center gap-3">
          <Button btnText="Join Us" bgColor="bg-[#111111]" />
          <Button btnText="SHOP NIKE" bgColor="bg-[#111111]" />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-10">
        <h3 className="font-medium underline text-sm">FAQ</h3>
        <div className="mt-3">
          <h4 className="font-bold text-sm">Does my card need international purchases enabled?</h4>
          <p className="text-sm mt-1">
            Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
          </p>
        </div>
        {/* Additional Questions */}
        {[
          {
            question: "Can I pay for my order with multiple methods?",
            answer: "No, payment for Nike orders can't be split between multiple payment methods.",
          },
          {
            question: "What payment method is accepted for SNKRS orders?",
            answer: "You can use any accepted credit card to pay for your SNKRS order.",
          },
          {
            question: "Why don't I see Apple Pay as an option?",
            answer: "To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account, and have a supported card in your Wallet.",
          },
        ].map((item, index) => (
          <div key={index} className="mt-6">
            <h4 className="font-bold text-sm">{item.question}</h4>
            <p className="text-sm mt-1">{item.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <p className="text-sm">Was this answer helpful?</p>
        <div className="flex items-center gap-3 text-2xl mt-2">
          <IoIosThumbsUp />
          <IoIosThumbsDown />
        </div>
        <h4 className="text-md font-medium text-[#757575] mt-5">RELATED</h4>
        <ul className="list-none pl-5 mt-3 text-sm ">
          <li>
            <span className="underline">WHAT ARE NIKE`S DELIVERY OPTIONS?</span>
          </li>
          <li className="mt-2">
            <span className="underline">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</span>
          </li>
        </ul>
      </div>
    </div>

{/* Right Section */}
<div className="w-full h-auto p-6 flex flex-col items-center justify-center gap-10">
  <div className="font-bold text-[28px] text-center mb-6">CONTACT US</div>
  <div className="flex justify-center">
    <Image src="/mobile.png" alt="Contact Icon" width={64} height={64} />
  </div>
  <div className="w-full md:w-[265.25px] text-center">
    <div className="font-medium text-[16px]">000 800 919 0566</div>
    <div className="font-normal text-[14px] md:text-[16px]">
      Products & Orders: 24 hours a day, 7 days a week <br />
      Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
    </div>
  </div>

  <div className="w-full md:w-[265.25px] flex flex-col items-center text-center">
    <BiSolidMessageDots className="w-16 h-16 md:w-[64px] md:h-[64px]" />
    <div className="font-medium text-sm md:text-[15px]">24 hours a day</div>
    <div className="font-medium text-sm md:text-[15px]">7 days a week</div>
  </div>

  <div className="w-full md:w-[265.25px] flex flex-col items-center text-center">
    <IoMailUnreadSharp className="w-16 h-16 md:w-[64px] md:h-[64px]" />
    <div className="font-medium text-sm md:text-[15px]">We`ll reply within</div>
    <div className="font-medium text-sm md:text-[15px]">five business days</div>
  </div>

  <div className="w-full md:w-[265.25px] flex flex-col items-center text-center">
    <ImLocation2 className="w-16 h-16 md:w-[64px] md:h-[64px]" />
    <div className="font-medium text-sm md:text-[15px]">STORE LOCATOR</div>
    <div className="font-medium text-sm md:text-[15px]">
      Find Nike retail stores near you
    </div>
  </div>
</div>


  </div>
</div>

    </>
  );
}

export default Find;
