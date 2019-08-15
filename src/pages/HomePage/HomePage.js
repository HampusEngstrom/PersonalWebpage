import React from "react";
import styled from "styled-components";
import ContentConsumer from "../../contexts/ContentContext";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { LabeledIcon } from "../../components/IconsComponent";
import { SocialMediaButtons } from "../../components/SocialMediaButtons";
import { PageContainer, MainTitle, Header4 } from "../../components/Elements";

import { FlexColumns } from "../../components/FlexComponents";

import ContactDetails from "../../features/ContactDetails";

import avatar from "./../../assets/img_avatar.jpg";

const WorkTitle = styled(Header4)`
  padding-bottom: 20px;
  .labeled-icon {
    display: flex;
    padding: 5px 0px;
  }
`;

const TitleContainer = styled(FlexColumns)`
  justify-content: space-evenly;
  flex-grow: 0;
  flex-shrink: 0;
  height: 30vh;
  @media (min-width: 768px) {
    align-items: flex-start;
    justify-content: flex-end;
    height: 30vh;
    width: 430px;
  }
`;

const Avatar = styled(FlexColumns)`
  justify-content: space-evenly;
  flex-grow: 1;
  flex-shrink: 0;
  height: 60vh;
  text-align: center;
  background-image: url(${avatar});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media (min-width: 768px) {
    flex-grow: 0;
    height: auto;
    min-width: 375px;
    margin: 3px;
    background-position: right bottom;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 100px;
  }
`;

const Information = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 50%;
    flex-shrink: 1;
    flex-grow: 0;
  }
`;

const ContentContainer = ({ name, workTitle, contact }) => (
  <Content>
    <Avatar />
    <Information>
      <TitleContainer>
        <MainTitle>{name}</MainTitle>
        <WorkTitle>
          <LabeledIcon label={workTitle} icon={faCode} />
        </WorkTitle>
      </TitleContainer>
      <ContactDetails
        email={contact.email}
        phoneNumber={contact.phoneNumber}
        address={contact.address}
      />
      <SocialMediaButtons />
    </Information>
  </Content>
);

const HomePage = () => {
  return (
    <ContentConsumer>
      {({ profile }) => (
        <PageContainer>
          <ContentContainer {...profile} />
        </PageContainer>
      )}
    </ContentConsumer>
  );
};

export default HomePage;
