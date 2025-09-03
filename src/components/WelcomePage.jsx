import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Mobile App Frame */}
      <div className="w-[375px] h-[700px] bg-white rounded-2xl shadow-2xl p-6 relative flex flex-col">
        
        {/* Decorative Circles */}
        <div className="absolute -top-10 left-8 flex space-x-6">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg">
            1
          </div>
          <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg relative left-6 top-4">
            2
          </div>
          <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg relative left-12 top-8">
            3
          </div>
          <div className="w-12 h-12 bg-yellow-700 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg relative left-20 top-12">
            4
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to PopX
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet 
            nunc vel risus viverra aliquet. Donec ac nibh sed felis tincidunt facilisis.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mt-auto">
          <button
            onClick={() => navigate("/signup")}
            className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold text-lg shadow-md hover:from-purple-700 hover:to-purple-800 transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/login")}
            className="w-full py-4 px-6 bg-purple-100 text-purple-700 rounded-xl font-semibold text-lg shadow-md hover:bg-purple-200 transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-purple-200"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
