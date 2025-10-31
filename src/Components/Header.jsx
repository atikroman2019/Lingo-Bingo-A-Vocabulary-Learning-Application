import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = ({ user, logOut }) => {
  return (
    <header className="flex justify-between items-center w-11/12 mx-auto py-4 border-b">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <h1 className="text-2xl font-semibold">LingoLearn</h1>
      </div>

      {/* Center: Welcome Message */}
      {user && (
        <div className="text-gray-600 italic hidden md:block">
          Welcome, <span className="font-medium">{user.name}</span> 👋
        </div>
      )}

      {/* Right: Login/Logout */}
      <div className="flex items-center gap-3">
        {user ? (
          <>
            <img
              src={user.photoURL}
              alt="User"
              className="w-10 h-10 rounded-full border"
            />
            <button
              onClick={logOut}
              className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
            >
              Log Out
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
