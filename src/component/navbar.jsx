import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/logonavbar.png";
import keranjang from "../assets/logo/iconKeranjang.svg";
import profile from "../assets/logo/iconProfile.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/blog", label: "Blog" },
    { path: "/about", label: "About Us" }
  ];

  return (
    <nav className="bg-secondary text-white p-2 w-full fixed z-50 drop-shadow-md md:px-2">
      <div className="flex justify-between items-center">
        <div className="flex justify-center content-center md:ml-[90px]">
          <img src={logo} alt="Logo Navbar" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-6 font-display font-medium text-sm text-textnav">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? "text-third"
                      : "hover:text-primary transition duration-300"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex justify-between gap-3 items-center space-x-3 mr-[90px]">
          <Link to="/checkout">
            <img src={keranjang} alt="Keranjang" className="w-6 h-6" />
          </Link>
          <Link to="/admin/login">
            <div className="bg-profile p-2 rounded-full">
              <img src={profile} alt="Profile" className="w-6 h-6" />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center mr-4">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${isOpen ? "hidden" : "block"} h-6 w-6 text-hitam`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${isOpen ? "block" : "hidden"} h-6 w-6 text-htiam`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-secondary text-hitam absolute top-full left-0 right-0 p-4 shadow-md rounded-lg`}
      >
        <ul className="flex flex-col space-y-4 font-mono font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={location.pathname === link.path ? "text-third" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
