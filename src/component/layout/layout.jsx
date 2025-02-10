import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import MobileCart from "../MobileCart";
import { useLocation } from "react-router-dom";
import { shouldShowMobileCart } from "../../utils/routesUtils";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      {shouldShowMobileCart(location.pathname) && <MobileCart />}
    </>
  );
};

export default Layout;
