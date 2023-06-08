import React from "react";
import TopNavbar from "../Navbar/TopNavbar";
import MiddleNavbar from "../Navbar/MiddleNavbar";
import BottomNavbar from "../Navbar/BottomNavbar";
import Footer from "../Footer/Footer";
import { getNavigationLinks } from "../../services/navigationData";
import "./Layout.scss";

const Layout = ({ children, cartItems }) => {
  const { topNavbarLinks, middleNavbarLinks, bottomNavbarLinks } =
    getNavigationLinks();
  return (
    <div className="layout">
      <header className="layout__header">
        <TopNavbar links={topNavbarLinks} />
        <MiddleNavbar cartItems={cartItems} links={middleNavbarLinks} />
      </header>

      <main className="layout__children">
        <>
          <BottomNavbar links={bottomNavbarLinks} />
          {children}
        </>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
