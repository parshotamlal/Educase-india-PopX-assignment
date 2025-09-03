import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: true,
  });

  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate account creation
    setTimeout(() => {
      setIsLoading(false);
      navigate("/profile");
    }, 1000);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "radio" ? value === "true" : value,
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      {/* Mobile Container */}
      <div className="w-[375px] min-h-[700px] bg-white rounded-2xl shadow-2xl p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 ">
          Create your
        </h1>
         <h1 className="text-2xl font-bold text-gray-900 mb-4">
        PopX account
        </h1>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-purple-700 mb-2"
            >
              Full Name*
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                         outline-none transition-all duration-200 placeholder-gray-400"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-purple-700 mb-2"
            >
              Phone Number*
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+91 "
              className="w-full px-4 py-3 border border-gray-200 rounded-lg 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                         outline-none transition-all duration-200 placeholder-gray-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-purple-700 mb-2"
            >
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="xyz@email.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                         outline-none transition-all duration-200 placeholder-gray-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-purple-700 mb-2"
            >
              Password*
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                         outline-none transition-all duration-200 placeholder-gray-400"
              required
            />
          </div>

          {/* Company Name */}
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-purple-700 mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="PopX Pvt Ltd"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                         outline-none transition-all duration-200 placeholder-gray-400"
            />
          </div>

          {/* Agency Radio */}
          <div>
            <p className="block text-sm font-medium text-purple-700 mb-3">
              Are you an Agency?*
            </p>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="true"
                  checked={formData.isAgency === true}
                  onChange={handleChange}
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="false"
                  checked={formData.isAgency === false}
                  onChange={handleChange}
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-900 to-purple-700 text-white 
                       py-4 px-6 rounded-xl font-semibold text-lg shadow-lg 
                       hover:from-purple-700 hover:to-purple-800 
                       disabled:opacity-50 disabled:cursor-not-allowed 
                       transform hover:scale-[1.02] transition-all duration-200 
                       focus:outline-none focus:ring-4 focus:ring-purple-300 mt-8"
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

      
      </div>
    </div>
  );
};

export { SignupPage };
