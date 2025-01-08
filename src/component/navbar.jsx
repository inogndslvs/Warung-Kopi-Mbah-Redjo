import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logonavbar.png";
import keranjang from "../assets/logo/iconKeranjang.svg";
import profile from "../assets/logo/iconProfile.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-secondary text-white p-2 w-full fixed z-50 drop-shadow-md md:px-2">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex justify-center content-center md:ml-[90px]">
          <img src={logo} alt="Logo Navbar" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-6 font-display font-medium text-sm text-textnav ">
            <li className={location.pathname === "/" ? "text-third" : "hover:text-primary"}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === "/menu" ? "text-third" : "hover:text-primary"}>
              <Link to="/menu">Menu</Link>
            </li>
            <li className={location.pathname === "/blog" ? "text-third" : "hover:text-primary"}>
              <Link to="/blog">Blog</Link>
            </li>
            <li className={location.pathname === "/about-us" ? "text-third" : "hover:text-primary"}>
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex justify-between gap-3 items-center space-x-3 mr-[90px]">
          <img src={keranjang} alt="Keranjang" className="w-6 h-6" />
          <div className="bg-profile p-2 rounded-full">
            <img src={profile} alt="Profile" className="w-6 h-6" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center mr-4">
          <button onClick={toggleMenu} type="button" className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white" aria-controls="mobile-menu" aria-expanded={isOpen}>
            <span className="sr-only">Open main menu</span>
            {/* Hamburger Icon */}
            <svg className={`${isOpen ? "hidden" : "block"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* Close Icon */}
            <svg className={`${isOpen ? "block" : "hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-secondary text-black absolute top-full left-0 right-0 p-4 shadow-md rounded-lg`}>
        <ul className="flex flex-col space-y-4 font-mono font-medium">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={() => setIsOpen(false)}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about-us" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
