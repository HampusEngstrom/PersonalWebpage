import React from "react";
import styled from "styled-components";

import ContentConsumer from "./../contexts/ContentContext";
import {
  PageContainer,
  Text,
  BoldText,
  Header1
} from "./../components/Elements";

import img from "./../assets/about_me.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

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

const HobbiesList = styled.ul`
  margin-top: 50px;
`;

const Hobby = styled.li`
  margin-top: 20px;
  padding-left: 20px;
  .fa-li {
    padding-top: 10px;
  }
`;

const Avatar = () => (
  <ImageContainer>
    <img src={img} alt="" />
  </ImageContainer>
);

const ContentContainer = ({ description, hobbies }) => (
  <Content>
    <Avatar />
    <PageHeader>Om mig</PageHeader>
    <Text>{description}</Text>
    <HobbiesList className="fa-ul">
      {hobbies.map((hobby, index) => (
        <Hobby key={index}>
          <span className="fa-li">
            <FontAwesomeIcon icon={faAngleRight} size={"2x"} />
          </span>
          <BoldText fontSize="1.5em">{hobby.title}</BoldText>
          <Text>{hobby.description}</Text>
        </Hobby>
      ))}
    </HobbiesList>
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
