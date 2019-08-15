import React from "react";
import ContentConsumer from "./../contexts/ContentContext";
import img from "./../assets/about_me.jpg";
import { PageContainer, Text, Header1 } from "./../components/Elements";
import styled from "styled-components";

const PageHeader = styled(Header1)`
  padding: 0;
  @media (min-width: 480px) {
    margin-top: 90px;
  }
`;

const Content = styled.div`
  margin: 20px;
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`;

const ImageContainer = styled.div`
  margin: 0 20px 0px 0;
  width: 100%;
  img {
    width: 100%;
  }
  @media (min-width: 480px) {
    float: left;
    width: 50%;
  }
  @media (min-width: 768px) {
    max-width: 350px;
  }
`;

const Avatar = () => (
  <ImageContainer>
    <img src={img} alt="" />
  </ImageContainer>
);

const ContentContainer = ({ description }) => (
  <Content>
    <Avatar />
    <PageHeader>Om mig</PageHeader>
    <Text>{description}</Text>
  </Content>
);

const AboutMePage = () => (
  <ContentConsumer>
    {({ profile }) => (
      <PageContainer>
        <ContentContainer {...profile} />
      </PageContainer>
    )}
  </ContentConsumer>
);

export default AboutMePage;
