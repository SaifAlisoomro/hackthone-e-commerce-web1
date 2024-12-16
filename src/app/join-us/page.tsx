import React from "react";

function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <div className="w-full max-w-[380px] bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="Nike Logo" className="w-12 h-12" />
        </div>

        <h2 className="text-center text-lg font-semibold mb-4">
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </h2>

        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-black border-gray-300 rounded"
              />
              <span className="ml-2">Keep me signed in</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgotten your password?
            </a>
          </div>

          <p className="text-xs text-gray-600 text-center">
            By logging in, you agree to Nike's{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Use
            </a>
            .
          </p>

          <button
            type="submit"
            className="w-full bg-black text-white text-sm py-2 rounded-md hover:bg-gray-800"
          >
            SIGN IN
          </button>
        </form>

        <div className="text-center mt-4 text-sm">
          <p>
            Not a Member?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Join Us.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
