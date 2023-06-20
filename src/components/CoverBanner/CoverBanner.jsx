import React from 'react'
import './CoverBanner.css'

function CoverBanner({title, subTitle}) {

    const bannerStyle = {
        backgroundImage:
          "url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2744&q=80",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "450px",
        position: "relative",
        zIndex: -1,
      };


  return (
    <div style={bannerStyle}>
        <div className="banner-info">
          <p className='title'>{title}</p>
          <p className='sub-title'>{subTitle}</p>
        </div>
    </div>
  )
}

export default CoverBanner