import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
  align-items: center;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export { PageContainer };
