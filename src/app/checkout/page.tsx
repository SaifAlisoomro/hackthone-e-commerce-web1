import React from 'react';

const CheckoutForm = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
  
      <div className="text-2xl font-semibold mb-6 text-gray-800">
        How would you like to get your order?
      </div>

      <div className="border rounded-md p-4 mb-6">
        <label htmlFor="delivery" className="block mb-2 font-medium text-gray-700">
          Delivery Method
        </label>
        <select
          id="delivery"
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Select a delivery method</option>
          <option>Standard Shipping</option>
          <option>Express Delivery</option>
        </select>
      </div>

      
      <div className="border rounded-md p-4 mb-6">
        <div className="text-lg font-medium mb-4 text-gray-800">Enter your name and address</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Address Line 1"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Address Line 2"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Postal Code"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="City/Locality"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mt-4">
          <input type="checkbox" id="save-address" className="mr-2" />
          <label htmlFor="save-address" className="text-gray-600">
            Save this address as my preferred address
          </label>
        </div>
      </div>

     
      <div className="border rounded-md p-4 mb-6">
        <div className="text-lg font-medium mb-4 text-gray-800">What`s your contact information?</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

     
      <div className="border rounded-md p-4 mb-6">
        <div className="text-lg font-medium mb-4 text-gray-800">What`s your PAN?</div>
        <input
          type="text"
          placeholder="Enter your PAN"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm text-gray-600 mt-2">
          PAN is required for tax purposes. Make sure it matches your government ID.
        </p>
      </div>

     
      <div className="flex justify-end">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium">
          Continue
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
