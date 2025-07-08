import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    toast.custom((t) => (
      <div
        className={`bg-white shadow-md border border-gray-200 p-4 rounded-lg flex flex-col items-center transition-all ${
          t.visible ? "animate-enter" : "animate-leave"
        }`}
      >
        <p className="mb-4 text-gray-800 font-medium">
          Are you sure you want to logout?
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => {
              toast.dismiss(t.id); // close popup
              localStorage.removeItem("token");
              navigate("/auth");
            }}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-700";

  return (
    <nav
      className={`bg-white shadow-md py-3 px-6 flex items-center ${
        location.pathname === "/auth" ? "justify-center" : "justify-between"
      }`}
    >
      {/* Logo / Brand */}
      <Link to="/" className="text-xl font-bold text-blue-600">
        Pixora
      </Link>

      {/* Nav Links */}
      <div className="space-x-6">
        {location.pathname !== "/auth" && (
          <Link to="/" className={isActive("/")}>
            Explore
          </Link>
        )}
        {token && location.pathname !== "/auth" && (
          <>
            <Link to="/upload" className={isActive("/upload")}>
              Upload
            </Link>
            <Link to="/profile" className={isActive("/profile")}>
              Profile
            </Link>
          </>
        )}
      </div>

      {/* Auth Button */}
      <div>
        {token && location.pathname !== "/auth" ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        ) : (
          location.pathname !== "/auth" && (
            <Link
              to="/auth"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Login
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
