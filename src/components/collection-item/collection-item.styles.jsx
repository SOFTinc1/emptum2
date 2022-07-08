import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  @media screen and (max-width: 800px) {
    width: 100%;

    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
        font-family: "Euclid";
      }
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  border: 2px solid #000;
`;

export const AddButton = styled.button`
  width: 100%;
  padding: 10px 0;
  height: 40px;
  background: #000;
  border: none;
  color: #fff;
  font-family: Syne;
  font-size: 18px;
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    background: #fff;
    color: #000;
    border-top: 2px solid #000;
    font-weight: 800;
  }

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const CollectionFooter = styled.div`
  width: 100%;
  font-size: 18px;
  display: grid;
  grid-template-columns: 6fr 2fr;
  grid-gap: 0px;
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  border-left: 2px solid #000;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 2px solid #000;
  border-bottom: none;
  border-right: none;
  border-top: none;
  border-radius: 0px;
`;

export const FooterName = styled.span`
  width: 100%;
  font-family: "Euclid";
  text-align: left;
  margin: 15px 0 0 10px;
  font-size: 22px;

  @media screen and (max-width: 800px) {
    font-size: 15px;
    margin: 15px 0 0 5px;
  }
`;

export const FooterPrice = styled.span`
  width: 100%;
  padding: 10px 0;
  height: 40px;
  font-family: "Euclid";
  text-align: center;
  border-top: 1px solid #aaa;
  font-weight: 800;
`;
