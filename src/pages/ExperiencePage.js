import React from "react";
import Experience from "./../containers/Experience";
import { PageContainer, Header1, Text } from "./../components/Elements";
import ContentConsumer from "./../contexts/ContentContext";
import styled from "styled-components";

const Header = styled(Header1)`
  width: 90%;
  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const ContentContainer = ({ title, description, work, education }) => (
  <>
    <Header>{title}</Header>
    <Text>{description}</Text>
    <Experience data={work} />
    <Experience data={education} />
  </>
);

const HomePage = () => (
  <ContentConsumer>
    {({ experience }) => (
      <PageContainer>
        <ContentContainer {...experience} />
      </PageContainer>
    )}
  </ContentConsumer>
);

export default HomePage;
