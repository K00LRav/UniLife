import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CoverBanner from '../../components/CoverBanner/CoverBanner';
import PropertyCards from '../../components/PropertyCard/PropertyCards';

function CityDetails() {

    const {cityId} = useParams()
    const [cityData, setCityData] = useState([])
    const [cityName, setCityName] = useState("")

    useEffect(()=>{
        axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
        .then(res =>{
            console.log(res.data.response)
            //console.log(res.data)
            setCityData(res.data.response)
            setCityName(res.data)
        })
        .catch(err =>{
            console.log(err)
        }
        )
    },[])

  return (
    <div>
        <CoverBanner 
        title="Search Accommodation"
        subTitle="Whatever you're after, we can help you find the right student accommodation for you."
        />
        <PropertyCards cityName={cityName} cityData={cityData} cityId={cityId}/>
    </div>
  )
}

export default CityDetails