import React from "react";
import CoverBanner from "../../components/CoverBanner/CoverBanner";
import "./PropertyDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { MdOutlineKingBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";

function PropertyDetails() {
  const { propertyId } = useParams();
  const [apartmentDetails, setApartmentDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`https://unilife-server.herokuapp.com/properties/${propertyId}`)
      .then((res) => {
        console.log(res.data);
        setApartmentDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="main-container">
      <div className="photos-container">{/* container on the left */}</div>

      <div className="details-container">
        {/* container on the right of the images*/}
        <div className="address-details">
          <p>
            {apartmentDetails.address?.street}, {apartmentDetails.address?.city}
            , {apartmentDetails.address?.postcode}
          </p>
        </div>

        <div className="items">
              <span>Bedrooms </span>
              <div className="bedrooms">
                <MdOutlineKingBed/>
                {apartmentDetails.bedroom_count}
              </div>
            </div>

            <div className="items">
              <span>Bathroom</span>
              <div className="bathroom">
                <FaBath />
                {apartmentDetails.bathroom_count}
              </div>
            </div>

            <div className="items">
              <span>Property Type</span>
              <div className="property-type">
                {apartmentDetails.property_type}
              </div>
            </div>

            <div className="items">
              <span>Price</span>
              <div className="price">
                {apartmentDetails.rent}
              </div>
            </div>

            <div className="items">
              <span>Furnished type</span>
              <div className="furnished-type">
                {apartmentDetails.furnished}
              </div>
            </div>

            <div className="items">
              <span>Availability</span>
              <div className="available">
                {apartmentDetails.availability}
              </div>
            </div>

            
      </div>

      <div className="description">
        <h2>Description</h2>
        {<p>{apartmentDetails?.property_description}</p>}
      </div>

      <div className="bedroom-prices">
        <h2>Bedroom Prices</h2>
        <div className="beds">
          <div className="bed1">
            <p>Bedroom 1</p>
            <p>${apartmentDetails?.bedroom_prices?.bedroom_one} per week</p>
          </div>
          <div className="bed2">
            <p>Bedroom 2</p>
            <p>${apartmentDetails?.bedroom_prices?.bedroom_two} per week</p>
          </div>
          <div className="bed3">
            <p>Bedroom 3</p>
            <p>${apartmentDetails?.bedroom_prices?.bedroom_three} per week</p>
          </div>
          <div className="bed4">
            <p>Bedroom 4</p>
            <p>${apartmentDetails?.bedroom_prices?.bedroom_four} per week</p>
          </div>
        </div>
      </div>

      <div className="key-features">
        <h2>Key Features</h2>
        <p>
          {apartmentDetails.key_features?.map((item, index) => (
            <p key={index}>
              {" "}
              <AiOutlineCheck className="check-mark"/> {item}
            </p>
          ))}
        </p>
      </div>
    </div>
  );
}

export default PropertyDetails;
