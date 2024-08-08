import React from "react";
import logo from "../images/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
          <p className="long-text">
            Our passion lies in curating a collection of premium <br />
            wristwatch and accessories that speak to the <br />
            modern gentleman's taste and lifestyle.
          </p>
          <p className="short-text">
            Curating premium wristwatches and accessories <br></br>for the modern gentleman.
          </p>
          <div className="social-links">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="my-account">
          <h3>My Account </h3>
          <ul>
            <li>
              <a href="/">My Account</a>
            </li>
            <li>
              <a href="/about">Order History</a>
            </li>
            <li>
              <a href="/contact">Shopping</a>
            </li>
          </ul>
        </div>

        <div className="help">
          <h3>Help </h3>
          <ul>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/about">Terms & Condition</a>
            </li>
            <li>
              <a href="/contact">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
