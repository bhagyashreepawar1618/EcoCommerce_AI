import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-purple-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Rayeva AI</h1>

        <nav className="flex gap-6 items-center">
          {/* IMPORTANT: end prop */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold"
                : "bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-100"
            }
          >
            Register
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "border border-white px-4 py-2 rounded-lg bg-purple-700"
                : "border border-white px-4 py-2 rounded-lg hover:bg-purple-700"
            }
          >
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
