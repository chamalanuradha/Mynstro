import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChampagneGlasses, faEye, faEyeSlash, faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { loginUser } from "../services/user";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
    setMessage(null);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = {};
  if (!formData.email.trim()) newErrors.email = "Email is required";
  if (!formData.password) newErrors.password = "Password is required";
  setErrors(newErrors);
  if (Object.keys(newErrors).length > 0) return;

  const result = await loginUser(formData);

  if (result.success) {
    localStorage.setItem("token", result.data.token);
    localStorage.setItem("user", JSON.stringify(result.data.user));

    setMessage({ type: "success", text: result.message });
    setFormData({ email: "", password: "" });

    setTimeout(() => navigate("/"), 1000);
  } else {
    setMessage({ type: "error", text: result.message });
  }
};


  const handleCloseMessage = () => setMessage(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {message && (
          <div className={`flex items-center justify-between px-4 py-2 mb-4 rounded-md text-white ${message.type === "success" ? "bg-green-600" : "bg-red-600"}`}>
            <span>{message.text}</span>
            <button onClick={handleCloseMessage}>
              <FontAwesomeIcon icon={faSquareXmark} className="text-white text-lg" />
            </button>
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
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

          <button type="submit" 
         className="w-full py-2 bg-[#F4A261] font-bold hover:bg-[#f49061] rounded-md ">
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#F4A261] font-bold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
