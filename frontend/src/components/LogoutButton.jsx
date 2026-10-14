import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false); // update state
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm font-semibold"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
