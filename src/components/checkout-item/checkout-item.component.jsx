import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="card">
        <div className="image-container">
          <img src={imageUrl} alt="item" />
        </div>
        <div className="flexrow">
          <span className="name">Product Name: {name}</span>
          <span className="quantity">
            <div className="arrow" onClick={() => removeItem(cartItem)}>
              &#x2190;
            </div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addItem(cartItem)}>
              &#x2192;
            </div>
          </span>
          <span className="price">Price Per Item: $ {price}</span>
        </div>
        <div className="remove-button" onClick={() => clearItem(cartItem)}>
          &#x2613;
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
