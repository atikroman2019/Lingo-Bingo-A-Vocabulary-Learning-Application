import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { FiMenu, FiX } from "react-icons/fi";
import logoPng from "../assets/logo.png"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      setMenuOpen(false);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `block px-3 py-2 rounded-md transition ${
            isActive ? "text-purple-600 font-semibold" : "text-gray-700 hover:text-purple-500"
          }`
        }
        onClick={() => setMenuOpen(false)}
      >
        Home
      </NavLink>
      <NavLink
        to="/tutorials"
        className={({ isActive }) =>
          `block px-3 py-2 rounded-md transition ${
            isActive ? "text-purple-600 font-semibold" : "text-gray-700 hover:text-purple-500"
          }`
        }
        onClick={() => setMenuOpen(false)}
      >
        Tutorials
      </NavLink>
      <NavLink
        to="/about-us"
        className={({ isActive }) =>
          `block px-3 py-2 rounded-md transition ${
            isActive ? "text-purple-600 font-semibold" : "text-gray-700 hover:text-purple-500"
          }`
        }
        onClick={() => setMenuOpen(false)}
      >
        About
      </NavLink>
      <NavLink
        to="/start-learning"
        className={({ isActive }) =>
          `block px-3 py-2 rounded-md transition ${
            isActive ? "text-purple-600 font-semibold" : "text-gray-700 hover:text-purple-500"
          }`
        }
        onClick={() => setMenuOpen(false)}
      >
        Start Learning
      </NavLink>
        {/* ✅ Only show Profile link if logged in */}
            {user && (
              <NavLink
                to="/my-profile"
                className={({ isActive }) =>
                  isActive ? "text-purple-600" : "hover:text-purple-500"
                }
              >
                My Profile
              </NavLink>
            )}
    </>
  );

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex w-10 items-center gap-2">
          <img src={logoPng} alt="" />

          <Link to="/" className="text-2xl font-bold text-purple-600">
            LingoBingo
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">{navLinks}</div>

        {/* Right Side (User Info / Login) */}
        <div className="hidden md:flex items-center gap-4">
          {user && user?.email ? (
            <>
              <div className="flex items-center gap-2">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-10 h-10 rounded-full border-2 border-purple-400 object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 bg-purple-200 flex items-center justify-center rounded-full text-purple-700 font-semibold">
                    {user.displayName ? user.displayName.charAt(0) : "U"}
                  </div>
                )}
                <span className="font-medium text-gray-700 hidden sm:block">
                  {user.displayName || "User"}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col p-4 space-y-2">
            {navLinks}

            {/* User Info on Mobile */}
            {user && user?.email ? (
              <div className="mt-4 flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName}
                      className="w-10 h-10 rounded-full border-2 border-purple-400"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-purple-200 flex items-center justify-center rounded-full text-purple-700 font-semibold">
                      {user.displayName ? user.displayName.charAt(0) : "U"}
                    </div>
                  )}
                  <span className="font-medium text-gray-700">
                    {user.displayName || "User"}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="block text-center bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
