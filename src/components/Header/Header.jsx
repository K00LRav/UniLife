import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
      <div className="logo-img"><img src="src/assets/logo.svg" alt="logo-image"/></div>
      <div className="nav-link">
        <div className='short-list'>Shortlist</div>
        <div className='contact-us'>Contact Us</div>
      </div>
      </div>
  )
}

export default Header