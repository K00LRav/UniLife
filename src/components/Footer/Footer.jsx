import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="link-container">
        <Link to="/" className="about-link">About Us</Link>
        <Link to="/" className="term-link">Terms & Condition</Link>
        <Link to="/" className="privacy-link">Privacy & Cookie Policies</Link>
      </div>
      <div className="company-info">
      <div className="year-founded">
        <span>2022</span>
      </div>
      <div className="company-name">
        <span>&copy;UniLife</span>
      </div>
      </div>
    </div>
  );
}

export default Footer;
