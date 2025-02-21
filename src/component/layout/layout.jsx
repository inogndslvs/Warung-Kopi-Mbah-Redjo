import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-secondary">
        {children}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
