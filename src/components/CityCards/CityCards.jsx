import React, {useState, useEffect}from 'react'
import axios from 'axios'
import './CityCards.css'
import { Link } from 'react-router-dom'

function CityCards() {

  const baseUrl = import.meta.env.VITE_BASE_URL;

      //stores the cities 
  const [cities, setCities] = useState([])

  //using axios to get the cities
  

  useEffect(()=>{
    axios.get(`${baseUrl}/cities?limit=9`)
    .then(res  =>{
        console.log(res.data.response)
        setCities(res.data.response)
    })
    .catch(err => {
      console.log(err)})
  },[])


  return (
    <div className="main">
    <div className='cities-container'>
    {
      cities.map((item) => 
        <Link to={`cityDetails/${item?._id}`} key={item?._id} className='city-content'>
        <img src={item.image_url} alt="image of city" />
        <div className="city-info">
        <p>{item.name}</p>
        <span>{item.property_count} properties</span>
        </div>
    </Link> 
    )
    }
  </div>
      <div className="see-cities">
        <Link className='link-to-all-cities' to={`/AllCities`}>See All Cities</Link>
      </div>
      <div className="compare-container">
      <div className="compare-title">
        <h2>Compare all inclusive student homes.</h2>
      </div>
      <div className="search-compare-bills-boxes">
        <div className="search">
          <img src="src/assets/search-img.svg"/>
        </div>
        <div className="compare">
          <img src="src/assets/compare.svg"/>
        </div>
        <div className="bills">
          <img src="src/assets/bills-included.svg"/>
        </div>
      </div>
      </div>
  </div>
  )
}

export default CityCards