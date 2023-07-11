import { useContext } from "react";
import { Link } from "react-router-dom";
import './ShortList.css'
import { FavoriteContext } from '../contexts/FavoriteContext';
import { BiBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";


function ShortList() {

  const {favorites} = useContext(FavoriteContext)

  return (
    <div className='favorites-container'>
      <h1>My Favorite Apartments</h1>
      <div className="favorites-details">
        {
          favorites.map(favorites =>           
          <div className="details" key={favorites?._id}>
            
          <div className="img-container">
            <img className="apartment-image" src={favorites?.images[0]} alt="" />
          </div>
          
          <div className="price-accommodation">
            <div>
              <p className="rent">${favorites?.rent}</p>
              <p className="included">Included Bills</p>
            </div>

            <div className="accommodation-icons">
              <BiBed className="bed-icon" />
              <span>{favorites?.bedroom_count}</span>
              <FaBath className="bath-icon" />
              <span>{favorites?.bathroom_count}</span>
            </div>
          </div>
          
          <div className="furnished">
            <p>{favorites?.property_type}</p>
            <p>{favorites?.furnished}</p>
          </div>

          <div className="address">
            <MdLocationPin />
            <p>{favorites?.address.street},</p>
            <p> {favorites?.address.city},</p>
            <p>{favorites?.address.postcode}</p>
          </div>

          <Link to={`/PropertyDetails/${favorites?._id}`} className="viewHome-btn">
            <AiOutlineHome />
            <p>View Home</p>
          </Link>
        
        </div>
        )}
        </div>
      </div>
  )
}

export default ShortList