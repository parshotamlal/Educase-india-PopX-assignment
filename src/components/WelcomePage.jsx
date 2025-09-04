import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Mobile App Frame */}
      <div className="w-[375px] h-[700px] bg-white rounded-2xl shadow-2xl p-6 relative flex flex-col">
        
        {/* Decorative Circles */}

  <div className="relative mb-16">
          <div className="flex justify-center items-center space-x-6">
            <div className="absolute top-5 left-32">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg hover:bg-yellow-900">
                1
              </div>
            </div>
            <div className="absolute left-25 top-18">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg hover:bg-yellow-900">
                2
              </div>
            </div>
            <div className="absolute top-32 left-28">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg hover:bg-yellow-900">
                3
              </div>
            </div>
            <div className="absolute top-45 left-38">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg hover:bg-yellow-900">
                4
              </div>
            </div>

             <div className="absolute top-52 left-50">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg hover:bg-yellow-900">
                5
              </div>
            </div>
          </div>
        </div>




   <div className="relative">   {/* parent is relative */}

  {/* Content */}
  <div className="absolute top-85 -left-0  flex flex-col justify-center items-center text-center">
    <h1 className="text-3xl font-bold text-gray-900">
      Welcome to PopX
    </h1>
    <p className="text-gray-600 text-base leading-relaxed absolute -left-[33px] top-9 ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  
    </p>
  </div>

  {/* Action Buttons */}
  <div className="absolute top-[420px] left-1/2 -translate-x-1/2 mt-6 space-y-4 w-full max-w-sm">
    <button
      onClick={() => navigate("/signup")}
      className="w-full py-4 px-6 bg-purple-600 text-white rounded-xl font-semibold text-lg hover:bg-purple-700 transition"
    >
      Create Account
    </button>

    <button
      onClick={() => navigate("/login")}
      className="w-full py-4 px-6 bg-purple-100 text-purple-700 rounded-xl font-semibold text-lg hover:bg-purple-200 transition "
    >
      Already Registered? Login
    </button>
  </div>
</div>

</div>
</div>
)
}

export default WelcomePage;
