import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { BsSuitHeart, BsEnvelope } from "react-icons/bs";

function Header() {
  return (
    <div className='header-container'>
      <Link to="/"><div className="logo-img"><img src="/src/assets/logo.svg" alt="logo-image"/></div></Link>
      <div className="nav-link">
        <div className='short-list'>
          <div><BsSuitHeart className='heart'/> ShortList</div>
          </div>
        <div className='contact-us'>
          <div><BsEnvelope className='envelope'/>Contact Us</div>
          </div>
      </div>
      </div>
  )
}

export default Header