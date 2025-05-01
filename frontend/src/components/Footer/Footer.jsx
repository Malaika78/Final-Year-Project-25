import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={assets.logo} alt="Logo" className="footer-logo" />
          <p className="footer-description">
            Our on-demand food delivery app connects users with their favorite
            restaurants, offering fast, convenient delivery with real-time
            tracking and a seamless ordering experience.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/myorders">My Orders</Link>
            </li>
            <li>
              <Link to="/PrivacyPolicy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Get in Touch</h3>
          <ul>
            <li>📞 +92 3244914082</li>
            <li>✉️ talkwithmalaika@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-bottom-text">
        © Final Year Project - BSCS (Virtual University of Pakistan)
      </p>
    </footer>
  );
};

export default Footer;
