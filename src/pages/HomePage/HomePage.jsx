import React from 'react'
import './HomePage.css'
import CityCards from '../../components/CityCards/CityCards';
import CoverBanner from '../../components/CoverBanner/CoverBanner';

function HomePage() {


  return (
    <div>
      <CoverBanner
          title="Find students homes with bills included"
          subTitle="A simple and faster way to search for student accommodation"
      />
      <p className='home-page-title'>Student accommodations in our top cities</p>
      <CityCards/>
    </div>
  )
}

export default HomePage