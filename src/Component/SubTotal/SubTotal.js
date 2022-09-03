import React from "react";
import "./SubTotal.css";
import Currencyformat from "react-currency-format";
import {useStateValue} from '../../StateProvider'
import { getBasketTotal } from "../../reducer";
import { useNavigate } from "react-router-dom";

const SubTotal = () => {
  const history = useNavigate()

  const [{basket}, dispatch] = useStateValue()
  // console.log(dispatch)
  return (
    <div className="subtotal">
      <Currencyformat
        renderText={(value) => (
            <>
            <p>
              SubTotal({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
                <input type='checkbox' /> This order contains a gift
              </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      />
      <button onClick={e => history('/payment')}>Proceed to Checkout</button>
    </div>
  );
};

export default SubTotal;
