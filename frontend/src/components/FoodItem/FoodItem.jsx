import React, { useContext } from "react";
import "./FoodItem.css";

// Assuming the asset paths are being exported from the assets file
import * as assets from "../../assets/assets";  
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {

  // Get cart items and actions from StoreContext
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  console.log('Cart Items:', cartItems);  // Add this line to check cart items

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt={name} />
        { !cartItems[id]
          ? <img 
              className='add' 
              onClick={() => addToCart(id)} 
              src={assets.add_icon_white} 
              alt="Add item" 
            />
          : <div className='food-item-counter'> 
              <img 
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red} 
                alt="Remove item" 
              />
              <p>{cartItems[id]}</p>  {/* Display the current item count */}
              <img 
                onClick={() => addToCart(id)}
                src={assets.add_icon_white} 
                alt="Add more" 
              />
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_stars} alt="Rating stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">₹{price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
