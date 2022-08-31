import React from "react";
import "../Product/Product.css";
// import Product1 from './product1.jpg'

function Product({ id, title, price, rating, image }) {
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
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
