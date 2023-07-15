import "./PropertyCards.css";
import { BiBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

function PropertyCard({ cityData, cityName}) {
  return (
    <div className="cards-container">
      <h2>
        <span className="city-name">Homes In {cityName.city_name}</span>
      </h2>

      <div className="property-cards-container">
        {cityData?.map((property) => (
          <div className="details" key={property?._id}>
            
            <div className="img-container">
              <img className="apartment-image" src={property?.images[0]} alt="" />
            </div>
            
            <div className="price-accommodation">
              <div>
                <p className="rent">${property?.rent}</p>
                <p className="included">Included Bills</p>
              </div>

              <div className="accommodation-icons">
                <BiBed className="bed-icon" />
                <span>{property?.bedroom_count}</span>
                <FaBath className="bath-icon" />
                <span>{property?.bathroom_count}</span>
              </div>
            </div>
            
            <div className="furnished">
              <p>{property?.property_type}</p>
              <p>{property?.furnished}</p>
            </div>

            <div className="address">
              <MdLocationPin />
              <p>{property?.address.street},</p>
              <p> {property?.address.city},</p>
              <p>{property?.address.postcode}</p>
            </div>

            <Link to={`/PropertyDetails/${property?._id}`} className="viewHome-btn">
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
