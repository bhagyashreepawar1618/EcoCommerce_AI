import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navStyle = ({ isActive }) =>
    isActive
      ? "bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold"
      : "text-white border border-white px-4 py-2 rounded-lg hover:bg-purple-700 transition";

  return (
    <header className="bg-purple-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Rayeva AI</h1>

        <nav className="flex gap-4 items-center">
          <NavLink to="/" end className={navStyle}>
            Home
          </NavLink>

          <NavLink to="/register" end className={navStyle}>
            Register
          </NavLink>

          <NavLink to="/login" end className={navStyle}>
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
