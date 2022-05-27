import React from "react";
import { CollectionItemContainer, Image, CollectionFooter, FooterName, FooterPrice, AddButton } from "./collection-item.styles";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";


const CollectionItem = ( { item, addItem } ) => {
    const { name, price, imageUrl } = item;
    return (
    <CollectionItemContainer>
        <Image
            style={{
                backgroundImage: `url(${imageUrl})`
            }} 
        />
        <CollectionFooter>
            <FooterName> {name} </FooterName>
            <FooterPrice> ${price} </FooterPrice>
        </CollectionFooter>
        <AddButton onClick={() => addItem(item)} inverted="true">add to cart</AddButton>
    </CollectionItemContainer>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps )(CollectionItem);