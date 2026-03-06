import { NavLink } from "react-router-dom";

const Header = () => {
  const linkStyle = "px-4 py-2 rounded-lg font-medium transition";

  const activeStyle = "bg-purple-600 text-white";
  const inactiveStyle = "text-purple-700 hover:bg-purple-100";

  return (
    <header className="bg-white shadow-md border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        {/* Left Navigation */}
        <nav className="flex gap-4">
          <NavLink
            to="/generate-page"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Generate Tags
          </NavLink>

          <NavLink
            to="/generate-page/generate-impact"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Generate Impact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
