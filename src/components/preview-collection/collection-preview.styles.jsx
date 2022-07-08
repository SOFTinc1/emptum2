import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 0 1rem;

  @media screen and (max-width: 800px) {
    padding: 0 10px ;
  }
`;
export const Title = styled.div`
  font-size: 28px;
  margin-bottom: 25px;
  font-family: Syne;
`;
export const Preview = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    align-items: center;
  }
`;
