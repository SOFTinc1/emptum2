import styled from "styled-components";
// import CustomButton from "../custom-button/custom-button.component";

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
  border: 2px solid #444946;
  padding: 0 149px;
  border-radius: 4px;

  @media screen and (max-width: 800px) {
    padding: 2px 85px;
    padding: 0 95px;
    border-radius: 0;
  }
`;

export const AddButton = styled.button`
  width: 100%;
  padding: 10px 0;
  height: 40px;
  background: #c60014;
  border: none;
  color: #fff;
  font-family: Syne;
  font-size: 18px;
  cursor: pointer;
  text-transform: capitalize;
  overflow: hidden;
  transition: all 0.9s ease-in-out;

  &:hover {
    background: #9E9E9E;
    color: #000;
    border-top: 2px solid #000;
    font-weight: 800;
    transform: scale(1.0);

  }

  @media screen and (max-width: 800px) {
    display: block;
    padding: 2px 13px;
    border: 2px solid #000;
  }
`;

export const CollectionFooter = styled.div`
  width: 100%;
  font-size: 18px;
  display: grid;
  grid-template-columns: 8fr 2fr;
  grid-gap: 0px;
  border-top: 2px solid #444946;
  border-right: 2px solid #444946;
  border-bottom: 2px solid #444946;
  border-left: 2px solid #444946;
  border-radius: 3px;

  @media screen and (max-width: 800px) {
    border-radius: 0;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 2px solid #444946;
  border-bottom: none;
  border-right: none;
  border-top: none;
  border-radius: 3px;
  border-radius: 0px;
`;

export const FooterName = styled.span`
  width: 100%;
  font-family: syne;
  text-align: left;
  margin: 15px 0 0 10px;
  font-size: 22px;
  font-weight: 800;

  @media screen and (max-width: 800px) {
    font-size: 15px;
    margin: 15px 0 0 5px;
  }
`;

export const FooterPrice = styled.span`
  width: 100%;
  padding: 10px 0;
  height: 40px;
  font-family: syne;
  text-align: center;
  border-top: 1px solid #000;
  font-weight: 800;
`;
