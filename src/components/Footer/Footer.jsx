import React from "react";
import "./Footer.scss";
import Logos from "../../images/logos";
import SocialIcons from "../../images/social";
import Divider from "../Divider/Divider";
import FooterImages from "../../images/footer";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__column">
            <div className="footer__logo">
              <img
                src={`${Logos.yeshteryLogo}`}
                className="product-image"
                alt="Product"
              />
            </div>
            <p className="footer__description">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam in
              hendrerit in Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam in hendrerit in
            </p>
          </div>
          <Divider vertical color={"#868686"} />
          <div className="footer__column">
            <div className="footer__subscribe">
              <h3 className="footer__subscribe-title">
                Subscribe to our newsletter
              </h3>
              <form className="footer__subscribe-form">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Enter Your Mail"
                  className="footer__subscribe-input"
                />
                <button className="footer__subscribe-button">Subscribe</button>
              </form>
            </div>
            <div className="footer__links-grid">
              <div className="footer__links-column">
                <ul className="footer__links-list">
                  <li>
                    <a href="/" className="footer__link">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer__link">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer__link">
                      Track Order
                    </a>
                  </li>
                  <li>
                    <a href="/sell-with-us" className="footer__link">
                      Sell With Us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer__link">
                      Shipping And Returns
                    </a>
                  </li>
                </ul>
              </div>
              <Divider vertical color={"#868686"} />
              <div className="footer__links-column">
                <ul className="footer__links-list">
                  <li>
                    <div className="footer__social-icon">
                      <img
                        src={SocialIcons.facebook}
                        className="footer__social-icon-image"
                        alt="Facebook"
                      />
                    </div>
                    <a
                      href="https://www.facebook.com/yeshtery/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__link"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <div className="footer__social-icon">
                      <img
                        src={SocialIcons.instagram}
                        className="footer__social-icon-image"
                        alt="Instagram"
                      />
                    </div>
                    <a
                      href="https://www.instagram.com/yeshtery/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__link"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <div className="footer__social-icon">
                      <img
                        src={SocialIcons.twitter}
                        className="footer__social-icon-image"
                        alt="Twitter"
                      />
                    </div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__link"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <div className="footer__social-icon">
                      <img
                        src={SocialIcons.linkedin}
                        className="footer__social-icon-image"
                        alt="LinkedIn"
                      />
                    </div>
                    <a
                      href="https://www.linkedin.com/company/yeshtery"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__link"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Divider color={"#868686"} />
        <div className="footer__copyright">
          <p className="footer__copyright-text">
            &copy; 2023 yeshtery, all rights reserved.
          </p>
          <div className="footer__payments">
            <img
              alt="cash"
              src={FooterImages.cashOnDelivery}
              className="footer__payment-image"
            />
            <img
              alt="visa"
              src={FooterImages.visa}
              className="footer__payment-image"
            />
            <img
              alt="mastercard"
              src={FooterImages.masterCard}
              className="footer__payment-image"
            />
          </div>
          <p className="footer__powered-by">
            Powered By{" "}
            <img
              src={FooterImages.nasnnav}
              alt="NasNav"
              className="footer__powered-by-icon"
            />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
