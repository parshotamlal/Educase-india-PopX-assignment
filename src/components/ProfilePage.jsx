import React from "react";
import { FaCamera } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  // Mock user data (in a real app, fetch from API or context)
  const user = {
    id: "1",
    fullName: "Marry Doe",
    email: "Marry@Gmail.Com",
    phoneNumber: "+1234567890",
    companyName: "PopX Digital",
    isAgency: true,
    avatar:
      "https://www.shutterstock.com/shutterstock/photos/2286784643/display_1500/stock-photo-happy-young-smiling-confident-professional-business-woman-wearing-blue-shirt-and-glasses-happy-2286784643.jpg",
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      {/* Mobile App Frame */}
      <div className="w-[375px] min-h-[700px] bg-white rounded-2xl shadow-2xl p-6 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold text-gray-800">
            Account Settings
          </h1>
          <button
            onClick={handleLogout}
            className="text-purple-600 hover:text-purple-700 font-medium text-sm"
          >
            Logout
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex items-start space-x-4">
            {/* Avatar */}
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.fullName}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
               <FaCamera  className=" text-white" />
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                {user.fullName}
              </h2>
              <p className="text-gray-600 text-sm mb-3">{user.email}</p>

             
            </div>

            
          </div>
           {/* Description */}
        <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam.
          </p>
        </div>

        </div>

      </div>
    </div>
  );
};

export { ProfilePage };
