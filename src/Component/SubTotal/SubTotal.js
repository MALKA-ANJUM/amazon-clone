import React from "react";
import "./SubTotal.css";
import {useStateValue} from '../../StateProvider'
import { getBasketTotal } from "../../reducer";
import { useNavigate } from "react-router-dom";
import { NumericFormat } from "react-number-format";


const SubTotal = () => {
  const history = useNavigate()

  const [{basket}, dispatch] = useStateValue()
  // console.log(dispatch)
  return (
    <div className="subtotal">
     <NumericFormat
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix="₹"
        decimalScale={2}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
      />
      <button onClick={e => history('/payment')}>Proceed to Checkout</button>
    </div>
  );
};

export default SubTotal;
