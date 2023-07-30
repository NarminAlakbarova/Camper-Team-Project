import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/header/logo.png";
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top row">
          <div className="col col-12 col-md-6 col-lg-3">
            <img src={logo} alt="website logo" />
          </div>
          <div className="col col-12 col-md-6 col-lg-3">
            <ul>
              <h3>Useful Links</h3>
              <li>
                <Link to={""}>Customer Support</Link>
              </li>
              <li>
                <Link to={""}>Privacy & Policy</Link>
              </li>
              <li>
                <Link to={""}>Our Story</Link>
              </li>
              <li>
                <Link to={""}>Be Our Partner</Link>
              </li>
            </ul>
          </div>
          <div className="col col-12 col-md-6 col-lg-3">
            <ul>
              <h3>Contact</h3>
              <li>
                <Link to={"tel:1-634-567-34"}>T: 1-634-567-34</Link>
              </li>
              <li>
                <Link to={"mailto: contact@traveltourtheme.co"}>
                  E: contact@traveltourtheme.com
                </Link>
              </li>
            </ul>
          </div>
          <div className="col col-12 col-md-6 col-lg-3">
            <h3>Pay Safely With Us</h3>
            <p>
              The payment is encrypted and transmitted securely with an SSL
              protocol.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2023 GoodLayers. All Rights Reserved.</p>
          <div>
            <Link>Terms of Service</Link>
            <Link>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
