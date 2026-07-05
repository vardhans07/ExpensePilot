import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-teal-100 to-blue-100 relative overflow-hidden">
      
      {/* Project Name Banner */}
      <h1
        className="text-6xl sm:text-7xl font-extrabold 
                   text-transparent bg-clip-text 
                   bg-gradient-to-r from-indigo-900 via-emerald-700 to-amber-600 
                   mb-10 tracking-widest 
                   drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] 
                   transition-all duration-700 ease-in-out 
                   hover:scale-110 hover:rotate-1 
                   hover:bg-gradient-to-r hover:from-red-700 hover:via-purple-700 hover:to-yellow-600 
                   animate-pulse"
      >
        ExpensePilot
      </h1>

      {/* Register Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md animate-fadeIn relative z-10"
      >
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Register
        </h2>

        <input  
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 transition"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 transition"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 transition"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Re-type Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 transition"
          required
        />

        <button
          type="submit"
          className="w-full px-5 py-2 rounded-full bg-gradient-to-r from-[#10b981] to-[#059669] 
                     text-white font-semibold shadow-md hover:from-[#059669] hover:to-[#065f46] 
                     hover:scale-105 transition-transform duration-300"
        >
          Register
        </button>

        <p className="mt-4 text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-[#3b82f6] hover:text-[#2563eb] transition-colors duration-300"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
