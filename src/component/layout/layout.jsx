import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-secondary">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
