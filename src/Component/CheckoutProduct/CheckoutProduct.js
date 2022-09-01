import React from "react";
import "../CheckoutProduct/CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";
const CheckoutProduct = ({id, title, image, rating, price}) => {

    const [{basket}, dispatch] = useStateValue( )
  return (
    <div className="checkoutProduct">
        <img className="checkoutProduct_image" src={image} alt="product" />
        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">{title}</p>

            <p className="checkoutProduct_price">
            <small>₹</small>
            <strong>{price}</strong>
            </p>

            <div className="checkoutProduct_rating">
            {Array(rating)
                .fill()
                .map((_, i) => ( 
                <p>⭐</p>
                ))}
            </div>
            <button>Remove from cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct;
