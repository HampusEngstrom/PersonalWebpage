import React from "react";
import styled from "styled-components";

import Print from "./../features/Print/";
import { PageContainer } from "./../components/Elements";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  align-self: center;
  justify-self: center;
  flex-grow: 1;
  margin-top: 25px;
  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 25px;
  }
`;

const ContentContainer = () => <Content>print version</Content>;

const PrintVersionPage = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <Print />
      </ContentContainer>
    </PageContainer>
  );
};

export default PrintVersionPage;
