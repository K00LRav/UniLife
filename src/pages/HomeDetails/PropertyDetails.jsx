import { useState, useEffect, useContext } from "react";
import "./PropertyDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiOutlineCheck } from "react-icons/ai";
import { MdOutlineKingBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { BsSuitHeart } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { FavoriteContext } from "../../contexts/FavoriteContext";


function PropertyDetails() {

  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { propertyId } = useParams();

  //to store the details of the apartment
  const [apartmentDetails, setApartmentDetails] = useState([]);

  //to store the main image of the apartment details page
  const [mainImage, setMainImage] = useState([]);

  //to check if an item is in the favorites
  const [isFavorite, setIsFavorite] = useState(false);

  const  {favorites, addApartment, removeApartment}  = useContext(FavoriteContext);

  //grabs the apartment details and stores it in the apartmentDetails const
  useEffect(() => {
    axios
      .get(`${baseUrl}/properties/${propertyId}`)
      .then((res) => {
        // console.log(res.data);
        setApartmentDetails(res.data);
        setMainImage(res.data.images[0]);
      })
      .catch((err) => console.log(err));
  }, []);


  //this is to store the favorite apartments.

  
  //check to see if the card is in favorites
  useEffect(() => {
    setIsFavorite(favorites.find((item) => item?._id === apartmentDetails?._id))
  }, [apartmentDetails?._id, favorites]);
  
  return (

    <div className="main-container">
{/* image container on the left */}
      <div className="photos-container">
        {/* container on the left */}
        <div className="photo-top">{<img src={mainImage} alt="" />}</div>
        <div className="photo-bottom">
          <div className="photo-bottom">
            {apartmentDetails?.images?.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setMainImage(item)}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
{/* end of left image container */}

{/* container on the right of the images*/}
      <div className="details-container">
        <div className="address-details">
          <p>
            {apartmentDetails.address?.street}, {apartmentDetails.address?.city}
            , {apartmentDetails.address?.postcode}
          </p>
        </div>

        <div className="items">
          <span>Bedrooms </span>
          <div className="bedrooms">
            <MdOutlineKingBed />
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
          <div className="property-type">{apartmentDetails.property_type}</div>
        </div>

        <div className="items">
          <span>Price</span>
          <div className="price">{apartmentDetails.rent}</div>
        </div>

        <div className="items">
          <span>Furnished type</span>
          <div className="furnished-type">{apartmentDetails.furnished}</div>
        </div>

        <div className="items">
          <span>Availability</span>
          <div className="available">{apartmentDetails.availability}</div>
        </div>
{/* end of container on the right */}


{/* favorites button and booking view section */}
        <div className="btns-container">
          <button className="short-list-btn">
            {isFavorite ? (
              <AiFillHeart
                style={{ color: "#3A5295", fontSize: "23px" }}
                onClick={() => removeApartment(apartmentDetails._id)}
              />
            ) : (
              <BsSuitHeart
                style={{ color: "#3A5295", fontSize: "23px" }}
                onClick={() => addApartment(apartmentDetails)}
              />
            )}
            Shortlist
          </button>
          <button className="bookviewing-btn">Book Viewing</button>
        </div>
      </div>
{/* end of booking and favorites section */}


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
          {apartmentDetails.key_features?.map((item, index) => (
            <p key={index}>
              {" "}
              <AiOutlineCheck className="check-mark" /> {item}
            </p>
          ))}

      </div>
    </div>
  );
}

export default PropertyDetails;
