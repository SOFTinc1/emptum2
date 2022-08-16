import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0 0 20px;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    align-items: center;
    margin-bottom: 30px;
    padding: 0 10px 90px 10px;
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
