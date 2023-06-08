import React from "react";
import "./Navbar.scss";
import Icons from "../../images/icons";

const TopNavbar = ({ links }) => {
  return (
    <nav className="navbar">
      <div className="navbar__content container">
        <div className="navbar__left">
          <div className="navbar__hamburger">
            {/* <!-- Hamburger icon --> */}
            <span className="hamburger-icon">
              <img src={Icons.hamburgerIcon} alt="hamburger icon" />{" "}
            </span>
          </div>
          <div className="navbar__logo">
            {/* <!-- Logo --> */}
            <img src="images/logo.svg" alt="Logo" />
          </div>
        </div>
        <div className="navbar__fill">
          {/* <!-- Carousel text content --> */}
          <div className="carousel">
            <p>
              Valentine’s Day Offers! Buy Two Get One Free Shop Now{" "}
              <a href="#">Shop Now</a>
            </p>
          </div>
        </div>
        <div className="navbar__right">
          {/* <!-- Support links --> */}
          <ul className="support-links">
            {links.map((link, index) => (
              <li key={index}>
                <img src={link.icon} alt={link.label} />
                <a href="#">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
