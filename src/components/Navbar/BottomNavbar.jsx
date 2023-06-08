import React from "react";

const BottomNavbar = ({ links }) => {
  return (
    <nav className="navbar navbar--bottom">
      {/* <!-- Support links --> */}
      <div className="navbar__content container">
        <ul className="support-links">
          {links.map((link, index) => (
            <li key={index}>
              <a href="#">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default BottomNavbar;
