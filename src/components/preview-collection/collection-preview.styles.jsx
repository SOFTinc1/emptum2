import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 0 1rem;
  width: 100%;

  @media screen and (max-width: 800px) {
    padding: 0 8px ;
  }
`;
export const Title = styled.div`
  font-size: 28px;
  margin: 25px 0;
  font-family: Syne;
  font-weight: 800;
`;
export const Preview = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    align-items: center;
  }
`;
