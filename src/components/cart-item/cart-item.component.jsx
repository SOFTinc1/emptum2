import React from "react";
import {
  CartItemContainer,
  CartItemProper,
  ImgSrc,
  ItemDetails,
  Name,
  Price,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemProper>
      <ImgSrc src={imageUrl} alt="item" />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {" "}
          {quantity} X ${price}
        </Price>
      </ItemDetails>
    </CartItemProper>
  </CartItemContainer>
);

export default CartItem;
