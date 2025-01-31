import React from "react";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import LogoFooter from ".././assets/logo/LogoFooter.svg";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-hitam text-white pt-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-start pl-4 md:items-center justify-evenly">
        {/* Logo dan Deskripsi (Tampil hanya di mobile) */}
        <div className="flex items-center md:hidden text-left">
          <img src={LogoFooter} alt="Logo" className="h-20 mr-4" />
          <p className="max-w-xs text-sm text-left">
            Temukan kenangan dalam setiap cangkir. Kunjungi Warung Kopi Mbah Redjo dan rasakan kehangatan suasana klasik yang tak terlupakan.
          </p>
        </div>

        <div className="md:hidden mt-4 border-t border-secondary w-[100%] mx-auto max-w-[900px]"></div>

        {/* Logo (Tampil di desktop) */}
        <div className="hidden md:flex items-center">
          <img src={LogoFooter} alt="Logo" className="mr-4" />
        </div>
        {/* Navigasi */}
        <nav className="mt-4 md:mt-0 flex flex-col gap-2 md:gap-14 md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-left">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#" className="hover:text-yellow-400">About</a>
          <a href="#" className="hover:text-yellow-400">Gallery</a>
          <a href="#" className="hover:text-yellow-400">Contact</a>
        </nav>
        {/* Sosial Media */}
        <div className="flex space-x-4 mt-4 md:mt-0 justify-center">
          <a href="#" className="hover:text-yellow-400"><FaXTwitter size={20} /></a>
          <a href="#" className="hover:text-yellow-400"><FaFacebookF size={20} /></a>
          <a href="#" className="hover:text-yellow-400"><FaInstagram size={20} /></a>
          <a href="#" className="hover:text-yellow-400"><FaGithub size={20} /></a>
        </div>
      </div>
      {/* Garis pemisah */}
      <div className="mt-4 border-t border-secondary w-[85%] mx-auto max-w-[900px]"></div>
      {/* Copyright */}
      <div className="text-center  p-4 text-sm">&copy; 2024 Warung Kopi Mbah Redjo. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
