import React from "react";
import "./SubTotal.css";
import Currencyformat from "react-currency-format";
import {useStateValue} from '../../StateProvider'
import { getBasketTotal } from "../../reducer";

const SubTotal = () => {
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
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default SubTotal;
