import React, {useEffect, useState} from 'react'
import './AllCities.css'
import CoverBanner from '../../components/CoverBanner/CoverBanner'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

function AllCities() {

    const baseUrl = import.meta.env.VITE_BASE_URL;
    const [allCities, setAllCities] = useState([])
    const { propertyId } = useParams();

    useEffect(()=>{
        axios.get(`${baseUrl}/cities?limit=20`)
        .then(res  =>{
            console.log(res.data.response)
            setAllCities(res.data.response)
        })
        .catch(err => {
          console.log(err)})
      },[])

  return (
    <div className='all-cities-container'>
       <CoverBanner
                 title="Student Accomodation"
                 subTitle="UniLife have student accommodation available across the UK. Whatever you`re
                  after, we can help you find the right student accommodation for you."
       />
        <div className="search-by-city">
            <h3>Search by City</h3>
        </div>
        <div className="all-cities">

            {
                allCities.map((cities) =>(
                <Link to={`/cityDetails/${cities?._id}`} key={cities?.id} className="allCities-content">
                <p>{cities.name}</p>
                </Link>
                )
            )}
        </div>
     </div>
  )
}

export default AllCities