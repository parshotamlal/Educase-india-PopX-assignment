import React from 'react';
// import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
//   const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm mx-auto">
        {/* Decorative circles */}
        <div className="relative mb-16">
          <div className="flex justify-center items-center space-x-6">
            <div className="absolute -top-20 left-8">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg">
                1
              </div>
            </div>
            <div className="absolute -top-4 left-20">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg">
                2
              </div>
            </div>
            <div className="absolute top-4 left-32">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg">
                3
              </div>
            </div>
            <div className="absolute top-12 left-44">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg">
                4
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-8 mt-40">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to PopX
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          <button
          onClick={() => ('/signup')}
            // onClick={() => navigate('/signup')}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:from-purple-700 hover:to-purple-800 transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            Create Account
          </button>
          
          <button
           onClick={() => ('/login')}
            // onClick={() => navigate('/login')}
            className="w-full bg-purple-100 text-purple-700 py-4 px-6 rounded-xl font-semibold text-lg hover:bg-purple-200 transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;