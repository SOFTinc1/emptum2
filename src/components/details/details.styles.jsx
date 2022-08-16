import styled from "styled-components";

export const DetailsContainer = styled.div`
  padding: 80px 10px;
  background: #fff;

  @media screen and (max-width: 800px) {
    padding: 80px 10px 100px 10px;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;

  @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const Col1 = styled.div``;
export const Col2 = styled.div`
  margin: 60px 0 0 0;

  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;
export const Col3 = styled.div``;
export const Col4 = styled.div`
  margin: 60px 0 0 0;

  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;
export const Gif = styled.img`
  width: 100%;
  border-radius: 4px;
`;
export const Title = styled.div`
  font-size: 22px;
  font-family: syne;
  color: #44224;
  font-weight: 800;
  padding: 10px 0;

  @media screen and (max-width: 800px) {
    font-size: 42px;
  }
`;
export const Desc = styled.div`
  font-weight: 400;
  font-size: 16px;
  text-transform: lowercase;
  font-family: syne;
  border-radius: 0rem;
  padding: 20px 30px;
  background-color: #cfd8dc;
  border-radius: 4px;
  letter-spacing: 1px;

  @media screen and (max-width: 800px) {
    font-size: 22px;
  }
`;
