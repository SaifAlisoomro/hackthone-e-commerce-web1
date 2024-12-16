import React from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import Button from "../components/button";

function Cart() {
  return (
    <>
     
     <div className="wrapper mt-20 px-4 lg:px-0">
  <div className="max-w-5xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-8">
     
      <div className="flex-1">
        <div className="mb-5">
          <span className="font-medium text-sm">Free Delivery</span>
          <div className="mt-2 text-xs flex gap-2">
            <span>Applies to orders of ₹ 14,000.00 or more.</span>
            <span className="font-medium underline cursor-pointer">View details</span>
          </div>
        </div>

        <div className="mb-5">
          <span className="font-medium text-lg">Bag</span>
        </div>

        <div>
         
          <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div>
                <Image src="/cart.png" alt="cart" width={150} height={150} />
              </div>
              <div className="flex flex-col md:flex-row md:justify-between w-full gap-4">
                <div>
                  <span className="font-medium text-sm">Nike Dri-FIT ADV TechKnit Ultra</span>
                  <div className="text-xs text-gray-500">Men's Short-Sleeve Running Top</div>
                  <div className="text-xs text-gray-500">Ashen Slate/Cobalt Bliss</div>
                  <div className="flex gap-4 text-xs text-gray-500 mt-2">
                    <span>Size L</span>
                    <span>Quantity 1</span>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <FaRegHeart className="w-6 h-6 cursor-pointer" />
                    <RiDeleteBin5Line className="w-6 h-6 cursor-pointer" />
                  </div>
                </div>
                <div className="text-sm font-medium">₹ 3,895.00</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div>
                <Image src="/cart2.png" alt="cart" width={150} height={150} />
              </div>
              <div className="flex flex-col md:flex-row md:justify-between w-full gap-4">
                <div>
                  <span className="font-medium text-sm">Nike Air Max 97 SE</span>
                  <div className="text-xs text-gray-500">Men's Shoes</div>
                  <div className="text-xs text-gray-500">Flat Pewter/Light Bone/Black/White</div>
                  <div className="flex gap-4 text-xs text-gray-500 mt-2">
                    <span>Size 8</span>
                    <span>Quantity 1</span>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <FaRegHeart className="w-6 h-6 cursor-pointer" />
                    <RiDeleteBin5Line className="w-6 h-6 cursor-pointer" />
                  </div>
                </div>
                <div className="text-sm font-medium">₹ 3,895.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>

  
      <div className="w-full lg:w-1/3">
        <div className="mb-5">
          <span className="font-medium text-lg">Summary</span>
        </div>
        <div className="mb-3">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>₹ 20,890.00</span>
          </div>
        </div>
        <div className="mb-3">
          <div className="flex justify-between text-sm">
            <span>Estimated Delivery & Handling</span>
            <span>Free</span>
          </div>
        </div>
        <div className="mb-5">
          <div className="flex justify-between text-sm">
            <span>Total</span>
            <span>₹ 20,890.00</span>
          </div>
        </div>
        <div className="text-center">
          <Button btnText="Member Checkout" bgColor="bg-black text-white px-6 py-2" />
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Cart;
