import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = ({ setIsAuthenticated, setActiveSection }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: formData.username,
        password: formData.password,
      });

      localStorage.setItem("token", res.data.token);
      setIsAuthenticated(true);
      setActiveSection("dashboard");
      window.location.href = "/";
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (

    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100">
   
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




      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md animate-fadeIn"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Login to Your Account
        </h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 transition"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 transition"
          required
        />

        <button
          type="submit"
          className="w-full px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold hover:from-blue-700 hover:to-indigo-800 transition"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-gray-600 text-center">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-[#10b981] hover:text-[#059669] transition-colors duration-300"
          >
            Register
          </Link>
        </p>

        <p className="mt-2 text-sm text-center">
          <Link
            to="/reset-password"
            className="text-pink-600 font-semibold hover:text-pink-700 transition-colors duration-300"
          >
            Forgot Password?
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
