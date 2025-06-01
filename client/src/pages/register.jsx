import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { registerUser } from "../services/user"; 


function register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await registerUser(formData);
        setMessage(response.message);
        alert("Registration successful! Check your email to verify.");
      } catch (error) {
        setMessage(error.message || "Something went wrong");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        {message && (
          <p className="text-sm text-center text-red-600 mb-4">{message}</p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
      
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
          </div>

      
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
          </div>

<div>
  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
    Password
  </label>
  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      id="password"
      value={formData.password}
      onChange={handleChange}
      className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      placeholder="Enter your password"
    />
    <button
      type="button"
      className="absolute inset-y-0 right-3 flex items-center text-gray-600"
      onClick={() => setShowPassword(!showPassword)}
    >
      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
    </button>
  </div>
  {errors.password && <p className="text-sm text-red-600">{errors.password}</p>}
</div>

<div>
  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
    Confirm Password
  </label>
  <div className="relative">
    <input
      type={showConfirmPassword ? "text" : "password"}
      id="confirmPassword"
      value={formData.confirmPassword}
      onChange={handleChange}
      className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      placeholder="Confirm your password"
    />
    <button
      type="button"
      className="absolute inset-y-0 right-3 flex items-center text-gray-600"
      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    >
      <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
    </button>
  </div>
  {errors.confirmPassword && (
    <p className="text-sm text-red-600">{errors.confirmPassword}</p>
  )}
</div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default register;
