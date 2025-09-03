import React from "react";
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
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      {/* Mobile App Frame */}
      <div className="w-[375px] min-h-[812px] bg-white rounded-2xl shadow-2xl p-6 flex flex-col">
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
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                {user.fullName}
              </h2>
              <p className="text-gray-600 text-sm mb-3">{user.email}</p>

              <div className="space-y-1 text-sm text-gray-600">
                <p>
                  <span className="font-medium">Phone:</span>{" "}
                  {user.phoneNumber}
                </p>
                {user.companyName && (
                  <p>
                    <span className="font-medium">Company:</span>{" "}
                    {user.companyName}
                  </p>
                )}
                <p>
                  <span className="font-medium">Account Type:</span>{" "}
                  {user.isAgency ? "Agency" : "Individual"}
                </p>
              </div>
            </div>
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

        {/* Action Buttons */}
        <div className="mt-auto space-y-3">
          <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-purple-300">
            Edit Profile
          </button>

          <button className="w-full bg-white border border-gray-200 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-50 transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-200">
            Privacy Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProfilePage };
