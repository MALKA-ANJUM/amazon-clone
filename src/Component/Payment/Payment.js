import React from "react";
import "../Payment/Payment.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { Link } from "react-router-dom";                                                                                                                                                                                                                                                                                                                                                                                                                         

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout (<Link to='/CheckOut'>{basket?.length} items</Link>)</h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>201, 2nd floor, Tetra grand green planet apartment,</p>
            <p>chokkanahalli main road, Hegde nagar,</p>
            <p>Bengaluru, Karnataka - 560062</p>
          </div>
          <div className="payment__address">
            <p></p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
              
          </div>

        </div>
      </div>
    </div>
  );
};

export default Payment;
