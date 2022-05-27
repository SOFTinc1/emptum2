import React from "react";

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
 <div className="cart-item">
    <div className="cart-item-proper">
        <img src={imageUrl} alt="item" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price"> {quantity} X ${price}</span>
        </div>
    </div>
    <hr className="hr" />
 </div>   
)

export default CartItem;