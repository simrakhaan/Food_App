import React, { useContext, useState} from 'react'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext'


const FoodItem = ({id,name,price,description,image}) => {

   const [itemCount] = useState(0)
    const{cartItems,addToCart,removeFromCart} =useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt=''/>
        {
            !itemCount[id]
            ?<img className='add' onClick={() => addToCart(id)} src="/images/add_icon_white.png" alt="" />
            :<div className='food-item-counter'>
                <img  onClick={() =>removeFromCart(id)} src="/images/remove_icon_red.png" alt="" />
                <p>{cartItems[id]}</p>
                 <img  onClick={() => addToCart(id) } src="/images/add_icon_green.png" alt="" />
                  
                            </div>
        }
      </div>
      <div className="food-item-">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src="/images/rating_starts.png" alt="" />
        </div>
        <p className="food-item-discription">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
