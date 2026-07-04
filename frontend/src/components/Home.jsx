import React from "react";
import WelcomeIcon from "../assets/images/accounting.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen 
  bg-gray-100 p-6 animate-fadeIn">
 {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text 
        bg-gradient-to-r from-[#0C0596] via-[#3F5EFB] to-[#FC466B] mb-6 drop-shadow-lg animate-bounce">
        Welcome to <span className=" decoration-wavy">ExpensePilot</span>
      </h1>

      {/* Illustration */}
      <div className="relative group mb-6">
        <img
          src={WelcomeIcon}
          alt="welcome illustration"
          className="w-64 sm:w-80 md:w-96 h-auto transform transition duration-500 group-hover:scale-110 group-hover:rotate-2 drop-shadow-2xl"
        />
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-pink-400 to-blue-400 opacity-30 blur-2xl group-hover:opacity-60 transition"></div>
      </div>

      {/* Tagline */}
      <p className="mt-4 text-lg sm:text-xl text-gray-700 font-medium max-w-2xl animate-slideUp">
        Track your <span className="font-bold text-[#3F5EFB]">income</span>, 
        <span className="font-bold text-[#FC466B]"> expenses</span>, and 
        <span className="font-bold text-[#0C0596]"> balance</span> effortlessly — 
        visualize your spending with charts and stay in control of your finances.
      </p>

      {/* Feature Highlights */}
      <div className="mt-10 grid sm:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 animate-fadeIn">
          <h3 className="text-xl font-bold text-[#0C0596] mb-2">📊 Visual Insights</h3>
          <p className="text-gray-600">Interactive charts to understand your spending patterns instantly.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 animate-fadeIn delay-200">
          <h3 className="text-xl font-bold text-[#3F5EFB] mb-2">💰 Income Tracking</h3>
          <p className="text-gray-600">Log and categorize your earnings to see where your money comes from.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 animate-fadeIn delay-400">
          <h3 className="text-xl font-bold text-[#FC466B] mb-2">💳 Expense Management</h3>
          <p className="text-gray-600">Stay on top of bills, food, travel, and other expenses with ease.</p>
        </div>
      </div>

      {/* Call to Action */}
      
    </div>
  );
};

export default Home;
