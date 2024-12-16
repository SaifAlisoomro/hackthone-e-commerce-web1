import React from "react";

const SignUpForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-[380px]">
        <h1 className="text-2xl font-bold text-center mb-2">
          BECOME A NIKE MEMBER
        </h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration and community.
        </p>
        <form className="space-y-4">
          {/* Email Address */}
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {/* First Name */}
          <input
            type="text"
            placeholder="First Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {/* Last Name */}
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {/* Date of Birth */}
          <input
            type="date"
            placeholder="Date of Birth"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {/* Country */}
          <select
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option>Pakistan</option>
            <option>USA</option>
            <option>UK</option>
            <option>Canada</option>
          </select>
          {/* Gender */}
          <div className="flex justify-between">
            <button
              type="button"
              className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
            >
              Male
            </button>
            <button
              type="button"
              className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
            >
              Female
            </button>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-800"
          >
            Join Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
