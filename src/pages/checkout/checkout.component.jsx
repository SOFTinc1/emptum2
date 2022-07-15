import React from "react";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="gridThinghs">
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>

    <div className="paymentdiv">
      <div></div>
      <div className="payment">
        <div className="total">
          <span className="delivery">Delivery Fee: FREE</span>
          <span className="total-span">product price: ${total}</span>
          <span className="total-span">total: ${total}</span>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
