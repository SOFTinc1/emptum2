import React from "react";
import { connect } from "react-redux";
import { withRouter } from "../directory/withRouter";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";



const CartDropdown = ({ cartItems, navigate, dispatch }) => (
    
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ?(
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : ( 
                <span className="empty-message">your cart is empty</span>
            )}
        </div>
        <CustomButton onClick={() => {navigate('/checkout'); dispatch(toggleCartHidden())}}>goto check out</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));