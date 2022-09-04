import React, { useEffect, useState } from "react";
import "../Payment/Payment.css";
import { useStateValue } from "../../StateProvider";
import Currencyformat from "react-currency-format";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../../reducer";
import axios from 'axios'

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const history = useNavigate()
  const stripe = useStripe();
  const element = useElements();

  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [disabled, setDisabled] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);

  useEffect (() => {
    const getClientSecret = async() => {
      const response= await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      })
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret()
    
  }, [basket])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: element.getElement(CardElement)
      }
    }).then(({ paymentIntent}) => {
      setSucceeded(true)
      setError(null)
      setProcessing(false)

      history.replaceState('/orders')
    })
  };


   //listen to the changes in the card element and display any error as the customer type their card details                                                          
  const handleChange = (e) => {
    setDisabled(window.event.empty);
    setError(window.event.error ? window.event.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/CheckOut">{basket?.length} items</Link>)
        </h1>
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
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}></CardElement>
              <div className="payment__priceContainer">
                <Currencyformat
                  renderText={(value) => (
                    <>

                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>
                    {processing ?  <p>Processing</p> : "Buy Now"}
                  </span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
