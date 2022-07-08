import React from "react";
import { connect } from "react-redux";
import { withRouter } from "../directory/withRouter";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems, navigate, dispatch }) => (
  <CartDropdownContainer>
    <CartItems>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessage>your cart is empty</EmptyMessage>
      )}
    </CartItems>
    <CustomButton
      onClick={() => {
        navigate("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      goto check out
    </CustomButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
