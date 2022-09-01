import React from "react";
import "../Checkout/Checkout.css";
import SubTotal from "../SubTotal/SubTotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../StateProvider";
// import { getBasketTotal } from "../../reducer";


const Checkout = () => {
  const [{basket}, dispatch] = useStateValue()
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="bg"
          className="checkout_ad"
        />
        <div>
          <h2 className="checkout_title">Shopping Cart</h2>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            ></CheckoutProduct>
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <h2>SubTotal</h2>
        <SubTotal></SubTotal>
      </div>
    </div>
  );
};

export default Checkout;
