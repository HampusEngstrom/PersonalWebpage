import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
  align-items: center;
  height: 100%;
  flex-grow: 1;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export { PageContainer };
