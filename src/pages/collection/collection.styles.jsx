import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    align-items: center;
    margin-bottom: 30px;
  }
`;
export const Title = styled.div`
  font-size: 38px;
  margin: 0 auto 30px;
`;
export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;
