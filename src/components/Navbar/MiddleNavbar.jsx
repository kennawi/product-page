import React, { Component } from "react";
import "./Navbar.scss";
import Icons from "../../images/icons";
import Logos from "../../images/logos";
import Cart from "../Cart/cart";

class MiddleNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCartOpen: false,
    };
  }

  toggleCart = () => {
    this.setState((prevState) => ({
      isCartOpen: !prevState.isCartOpen,
    }));
  };

  render() {
    const { links, cartItems } = this.props;

    return (
      <nav className="navbar navbar--middle">
        <div className="navbar__content container">
          <div className="navbar__left">
            <div className="search-input">
              <input type="text" placeholder="Search" />
              <img
                src={Icons.searchIcon}
                className="search-icon"
                alt="Search icon"
              />
            </div>
          </div>
          <div className="navbar__fill">
            {/* <!-- Carousel text content --> */}
            <div className="carousel">
              <a href="#">
                <img src={Logos.adidasIcon} alt="Adidas Logo" />
              </a>
            </div>
          </div>
          <div className="navbar__right">
            {/* <!-- Support links --> */}
            <ul className="support-links ">
              {/* <!-- Cart Item --> */}
              <li>
                <Cart cartItems={cartItems} />
              </li>
              {links.slice(1).map((link, index) => (
                <li key={index}>
                  <img src={link.icon} alt={link?.label} />
                  <a href="#">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default MiddleNavbar;
