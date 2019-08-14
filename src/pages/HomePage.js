import React from "react";
import styled from "styled-components";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { LabeledIcon } from "./../components/IconsComponent";
import { SocialMediaButtons } from "./../components/SocialMediaButtons";
import { PageContainer, Title, Header4 } from "../components/Elements";

import { FlexColumns as FlexColumnsBase } from "./../components/FlexComponents";

import ContactDetails from "./../features/ContactDetails";

import data from "../data.js";
import avatar from "./../assets/img_avatar.jpg";

const content = data.profile;

const Name = styled(Title)`
  width: 100%;
  margin: 0;
  padding: 0;
  align-self: flex-start;
  text-align: center;
  @media (min-width: 768px) {
    padding-bottom: 10px;
  }
`;

const Header = styled(Header4)`
  padding-bottom: 20px;
`;

const TitleContainer = styled(FlexColumnsBase)`
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
  @media (min-width: 1024px) {
  }
`;

const ContactContainer = styled(FlexColumnsBase)`
  justify-content: space-evenly;
  flex-grow: 0;
  flex-shrink: 0;
`;

const AvatarContainer = styled(FlexColumnsBase)`
  justify-content: space-evenly;
  flex-grow: 1;
  flex-shrink: 0;
  height: 60vh;
  @media (min-width: 768px) {
    height: auto;
    min-width: 400px;
    margin: 3px;
  }
`;

const Avatar = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  background-image: url(${avatar});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media (min-width: 768px) {
    background-position: right bottom;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 100px;
  }
`;

const ContentContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 50%;
    flex-shrink: 1;
    flex-grow: 0;
  }
`;

const HomePage = ({ width }) => {
  const { name, workTitle, contact } = content;
  return (
    <PageContainer>
      <Container>
        <AvatarContainer>
          <Avatar />
        </AvatarContainer>
        <ContentContainer>
          <TitleContainer>
            <Name>{name}</Name>
            <Header>
              <LabeledIcon label={workTitle} icon={faCode} />
            </Header>
          </TitleContainer>
          <ContactContainer>
            <ContactDetails
              email={contact.email}
              phoneNumber={contact.phoneNumber}
              address={contact.address}
            />
            <SocialMediaButtons />
          </ContactContainer>
        </ContentContainer>
      </Container>
    </PageContainer>
  );
};

export default HomePage;
