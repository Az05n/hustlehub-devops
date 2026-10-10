import { FaCube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <div className="bg-blue-600 group-hover:bg-blue-700 p-2 rounded-lg transition">
            <FaCube className="text-white text-xl" />
          </div>
          <span className="ml-3 text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
            HustleHub
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
        <Link
            to="/profile"
            className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
          >
            Profile
          </Link>
          <Link
            to="/dashboard"
            className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
          >
            Dashboard
          </Link>
          <a
            href="#"
            className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
