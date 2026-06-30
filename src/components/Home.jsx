import React from "react";
import WelcomeIcon from "../assets/images/accounting.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-br from-[#E0F2FE] via-[#FDE2E4] to-[#FBCFE8] p-6">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0C0596] via-[#3F5EFB] to-[#FC466B] mb-6 drop-shadow-lg animate-pulse">
        Welcome to Smart Expense Tracker
      </h1>

      {/* Illustration */}
      <div className="relative group">
        <img
          src={WelcomeIcon}
          alt="welcome illustration"
          className="w-64 sm:w-80 md:w-96 h-auto transform transition duration-500 group-hover:scale-105 group-hover:rotate-1 drop-shadow-xl"
        />
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-pink-400 to-blue-400 opacity-30 blur-2xl group-hover:opacity-50 transition"></div>
      </div>

      {/* Tagline */}
      <p className="mt-6 text-lg sm:text-xl text-gray-700 font-medium max-w-xl">
        Track your income, expenses, and balance effortlessly — visualize your
        spending with charts and stay in control of your finances.
      </p>

     
    </div>
  );
};

export default Home;
