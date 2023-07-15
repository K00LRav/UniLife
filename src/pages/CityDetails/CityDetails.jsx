import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CoverBanner from "../../components/CoverBanner/CoverBanner";
import PropertyCards from "../../components/PropertyCard/PropertyCards";
import './CityDetails.css'
import testimonial from "../../assets/testimonial.png"

function CityDetails() {
  const { cityId } = useParams();
  const [cityData, setCityData] = useState([]);
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    axios
      .get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
      .then((res) => {
        console.log(res.data.response);
        //console.log(res.data)
        setCityData(res.data.response);
        setCityName(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cityId]);

  return (
    <div>
      <CoverBanner
        title="Search Accommodation"
        subTitle="Whatever you're after, we can help you find the right student accommodation for you."
      />
      <PropertyCards cityName={cityName} cityData={cityData} cityId={cityId} />
      <div className="testimonial-container">
        <div className="student-life">
          <h2>Being a student in {cityName?.city_name}</h2>
          <p>
            Leeds is a lively and multicultural city with a large student
            population. It is quite a compact city, so it is easy to get around
            and has a community feel. Leeds is the perfect mix of city and town
            life and has something to offer to anyone who calls it home.
          </p>
          <p>
            Leeds is home to three universities, the University of Leeds, Leeds
            Trinity University and Leeds Beckett University
          </p>
        </div>
        <div className="student-img">
          <img src={testimonial} alt="image of students" />
        </div>
      </div>
    </div>
  );
}

export default CityDetails;
