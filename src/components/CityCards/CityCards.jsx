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
  )
}

export default CityCards