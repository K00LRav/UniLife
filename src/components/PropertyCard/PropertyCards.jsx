import React from "react";
import "./PropertyCards.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CityDetails from "../../pages/CityDetails/CityDetails";
import { BiBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

function PropertyCard({ cityData, cityName, cityId }) {
  return (
    <div className="cards-container">
      <h2>
        <span className="city-name">Homes In {cityName.city_name}</span>
      </h2>

      <div className="property-cards-container">
        {cityData?.map((item) => (
          <div className="details" key={item?._id}>
            
            <div className="img-container">
              <img className="apartment-image" src={item?.images[0]} alt="" />
            </div>
            
            <div className="price-accommodation">
              <div>
                <p className="rent">${item?.rent}</p>
                <p className="included">Included Bills</p>
              </div>

              <div className="accommodation-icons">
                <BiBed className="bed-icon" />
                <span>{item?.bedroom_count}</span>
                <FaBath className="bath-icon" />
                <span>{item?.bathroom_count}</span>
              </div>
            </div>
            
            <div className="furnished">
              <p>{item?.property_type}</p>
              <p>{item?.furnished}</p>
            </div>

            <div className="address">
              <MdLocationPin />
              <p>{item?.address.street},</p>
              <p> {item?.address.city},</p>
              <p>{item?.address.postcode}</p>
            </div>

            <Link to={`/homeDetails/${item?._id}`} className="viewHome-btn">
              <AiOutlineHome />
              <p>View Home</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyCard;
