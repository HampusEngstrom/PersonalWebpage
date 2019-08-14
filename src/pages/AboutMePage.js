import React from "react";

import data from "../data.js";
import img from "./../assets/about_me.jpg";
import { PageContainer, Text, Header1 } from "./../components/Elements";
import styled from "styled-components";
const content = data.profile;

const ImageContainer = styled.div`
  margin: 0 20px 0px 0;
  width: 100%;
  @media (min-width: 480px) {
    float: left;
    width: 50%;
  }
  @media (min-width: 768px) {
    max-width: 350px;
  }
`;

const Header = styled(Header1)`
  padding: 0;
  @media (min-width: 480px) {
    margin-top: 90px;
  }
`;

const ContentContainer = styled.div`
  margin: 20px;
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`;

const AboutMePage = () => (
  <PageContainer>
    <ContentContainer>
      <ImageContainer>
        <img src={img} style={{ width: "100%" }} />
      </ImageContainer>
      <Header>Om mig</Header>
      <Text>{content.description}</Text>
    </ContentContainer>
  </PageContainer>
);

export default AboutMePage;
