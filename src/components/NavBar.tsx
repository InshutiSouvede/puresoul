import { Menu, User, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { getAuthToken } from "../utils/auth";

// Define the props interface for the Navbar
interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = () => {
  const isLoggedIn = getAuthToken();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");

    // Redirect to home page
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink end to="/" className="text-2xl font-bold text-purple-800">
          PureSoul
        </NavLink>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {/* Always visible links */}
          <NavLink
            end
            to="/"
            className={({isActive}) => ` font-medium ${isActive ? ' text-purple-800 border-b-2 border-purple-800' : 'text-gray-600 hover:text-purple-800 transition'}`}
          >
            Home
          </NavLink>

          {/* Assessment link */}
          <NavLink
            end
            to="/assessments"
            className={({isActive})=>`font-medium hover:text-purple-800 transition ${isActive? 'border-b-2 border-purple-800 text-purple-800':'text-gray-600'}`}
          >
            Assessmentsss
          </NavLink>

          {/* Dashboard - only for logged-in users */}
          {isLoggedIn && (
            <>
            <NavLink
              end
              to="/dashboard"
              className={({isActive})=>`font-medium hover:text-purple-800 transition ${isActive? 'border-b-2 border-purple-800 text-purple-800':'text-gray-600'}`}
              >
              Dashboard
            </NavLink>
            <NavLink
              end
              to="/profile"
              className={({isActive})=>`font-medium hover:text-purple-800 transition ${isActive? 'border-b-2 border-purple-800 text-purple-800':'text-gray-600'}`}
              >
             <User size={24} />
            </NavLink>
            </>
          )}

          {/* Authentication Links */}
          {!isLoggedIn ? (
            <>
              <NavLink
                end
                to="/auth/signup"
                className={({isActive})=>`font-medium hover:text-purple-800 transition ${isActive? 'border-b-2 border-purple-800 text-purple-800':'text-gray-600'}`}
              >
                Sign Up
              </NavLink>
              <NavLink
                end
                to="/auth/login"
                className={({isActive})=>`font-medium hover:text-purple-800 transition ${isActive? 'border-b-2 border-purple-800 text-purple-800':'text-gray-600'}`}
              >
                Login
              </NavLink>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-300 text-white px-3 py-1 rounded hover:bg-red-400 transition-colors"
            >
              Logout
            </button>
          )}
        </div>
      </div>
      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-purple-800 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <NavLink
              end
              to="/"
              className="block py-2 text-purple-800 font-semibold border-b border-purple-200"
            >
              Home
            </NavLink>
            <NavLink
              end
              to="/assessments"
              className="block py-2 text-gray-600 hover:text-purple-800"
            >
              Assessments
            </NavLink>
            {isLoggedIn && (
              <NavLink
                end
                to="/dashboard"
                className="block py-2 text-gray-600 hover:text-purple-800"
              >
                Dashboard
              </NavLink>
            )}

            {/* Authentication Links */}
            {!isLoggedIn ? (
              <>
                <NavLink
                  end
                  to="/auth/signup"
                  className="block py-2 text-gray-600 hover:text-purple-800"
                >
                  Sign Up
                </NavLink>
                <NavLink
                  end
                  to="/auth/login"
                  className="block py-2 text-gray-600 hover:text-purple-800"
                >
                  Login
                </NavLink>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-300 text-white px-3 py-1 rounded hover:bg-red-400 transition-colors"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
