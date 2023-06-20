import React from "react";
import "./BottomBanner.css";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";

function BottomBanner() {
  return (
    <div className="bottom-banner-container">
      <div className="signup-container">
        <h2>Keep in touch</h2>
        <p>
          Curious about new offerings? Sign up for our weekly newsletter and
          stay informed.
        </p>
          <form action="">
            <input type="email" placeholder="Your email" />
          </form>
      </div>
      <div className="social-container">
        <h2>Let's Socialize</h2>
        <div className="social-link"><BsFacebook /><p>Facebook</p></div>
        <div className="social-link"><AiFillTwitterCircle /><p>Twitter</p></div>
        <div className="social-link"><RiInstagramFill /><p>Instagram</p></div>
      </div>
    </div>
  );
}

export default BottomBanner;
