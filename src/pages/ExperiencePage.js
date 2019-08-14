import React from "react";
import Experience from "./../containers/Experience";
import { PageContainer, Header1, Text } from "./../components/Elements";
import data from "./../data.js";
import styled from "styled-components";

const Header = styled(Header1)`
  width: 90%;
  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const HomePage = () => {
  const { title, description, work, education } = data.Experience;
  return (
    <PageContainer>
      <Header>{title}</Header>
      <Text>{description}</Text>
      <Experience data={work} type={"work"} />
      <Experience data={education} type={"education"} />
    </PageContainer>
  );
};

export default HomePage;
