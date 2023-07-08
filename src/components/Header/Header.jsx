import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { BsSuitHeart, BsEnvelope } from "react-icons/bs";
import Modal from "react-modal";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement(document.getElementById("root"));

  return (
    <div className="header-container">
      <Link to="/">
        <div className="logo-img">
          <img src="/src/assets/logo.svg" alt="logo-image" />
        </div>
      </Link>
      <div className="nav-link">
        <div className="short-list">
          <div>
            <BsSuitHeart className="heart" /> <Link to="/shortlist" className="short-list-link"><span>Shortlist</span></Link>
          </div>
        </div>
        <div className="contact-us">
          <div>
            <BsEnvelope className="envelope" />
            <span className="contact-btn" onClick={() => setIsOpen(true)}>
              Contact Us
            </span>
            <Modal
              isOpen={isOpen}
              onRequestClose={() => setIsOpen(false)}
              style={customStyles}
              contentLabel="Contact Us Modal"
            >
              <div className="modal-box">
                <div className="modal-header">
                  <h2>Contact Us</h2>
                  <button
                    className="modal-close-btn"
                    onClick={() => setIsOpen(false)}
                  >
                    <img
                      className="mail-box-img"
                      src="src/assets/mailbox.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="contact-message">
                  <p>
                    Feel free to contact us if you have any questions. Looking
                    forward to hearing from you.
                  </p>
                </div>
                <form className="contact-form">
                  <div className="item">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="item">
                    <label htmlFor="email">Phone Number</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="areyou">Are you a...</label>
                    <select type="text" className="employed">
                      <option>Student</option>
                      <option>Unemployeed</option>
                      <option>Self-Employeed</option>
                      <option>Employeed</option>
                    </select>
                  </div>
                  <div className="item">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  <div className="submit-container">
                    <button type="submit" className="submit-btn">
                      Sumit
                    </button>
                  </div>
                </form>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
