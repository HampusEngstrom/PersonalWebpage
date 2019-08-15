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
  <React.Fragment>
    <Header>{title}</Header>
    <Text>{description}</Text>
    <Experience data={work} type={"work"} />
    <Experience data={education} type={"education"} />
  </React.Fragment>
);

const HomePage = () => {
  return (
    <ContentConsumer>
      {({ experience }) => (
        <PageContainer>
          <ContentContainer {...experience} />
        </PageContainer>
      )}
    </ContentConsumer>
  );
};

export default HomePage;
