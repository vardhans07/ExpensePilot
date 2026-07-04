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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md animate-fadeIn"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Login
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
  className="w-full px-5 py-2 rounded-full !bg-blue-500 text-white font-bold hover:!bg-blue-700 transition"
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
