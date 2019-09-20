import React from "react";
import styled from "styled-components";
import ContentConsumer from "../contexts/ContentContext";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { LabeledIcon } from "../components/IconsComponent";
import { SocialMediaButtons } from "../components/SocialMediaButtons";
import { PageContainer, MainTitle, Header4 } from "./../components/Elements";

import { FlexColumns } from "../components/FlexComponents";

import ContactDetails from "../features/ContactDetails";

import avatar from "./../assets/img_avatar.jpg";

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
  width: 350px;
  @media (min-width: 768px) {
    align-items: flex-start;
    justify-content: flex-end;
    height: 60%;
    width: 430px;
  }
`;

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

const Information = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: Center;
  justify-content: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;
    flex-shrink: 1;
    flex-grow: 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-end;

  @media (min-width: 768px) {
    margin-right: 10px;
    width: 50%;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

const Avatar = styled.div`
  display: block;
  width: 90%;
  height: auto;
  max-width: 480px;

  img {
    width: 100%;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }
`;

const ContentContainer = ({ name, workTitle, contact }) => (
  <Content>
    <ImageContainer>
      <Avatar>
        <img src={avatar} alt="" />
      </Avatar>
    </ImageContainer>
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
      <SocialMediaButtons links={contact.socialMedia} />
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
