import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      navigate("/profile");
    }, 1000);
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      {/* Mobile container */}
      <div className="w-[375px] min-h-[700px] bg-white rounded-2xl shadow-2xl p-6">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Sign in to your
          </h1>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
         PopX account
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Enter your email and password to access your account.
          </p>
        </div>

        {/* Login form */}
        <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="Enter email address"
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
              placeholder="Enter"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                         outline-none transition-all duration-200 placeholder-gray-400"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 px-6 bg-gray-300 text-white rounded-xl font-semibold text-lg hover:bg-gray-500 transition"
          >
            {isLoading ? "Signing in..." : "Login"}
          </button>
        </form>
       
      </div>
    </div>
  );
};

export { LoginPage };
