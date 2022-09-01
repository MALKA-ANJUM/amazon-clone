import React, { useState } from "react";
import "../Product/Product.css";
// import Product1 from './product1.jpg'
import { useStateValue } from '../../StateProvider.js'

function Product({ id, title, price, rating, image }) {

  const [{basket}, dispatch] = useStateValue()
  // console.log('this is basket>>>>' , basket)

  const addToBasket = () =>{
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
    },
    })
  }

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>

        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (  //underscoreis a throwaway variable which is similar to unused ==> such that i=0 while using loop
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product" />
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Product;
