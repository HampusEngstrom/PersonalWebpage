import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faMapMarkerAlt,
  faPhoneAlt,
  faCode
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

import data from "../data.js";
import avatar from "./../assets/img_avatar.jpg";

const profile = data.Profile;

const Name = styled.h1`
  font-size: 5em;
  text-transform: uppercase;
  width: 500px;
  line-height: 75px;
  font-family: "Rubik", sans-serif;
  padding: 0;
  margin: 0;
  padding-top: 75px;
  margin-left: 10px;
  color: #405c27;
`;

const WorkTitle = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  display: flex;
  flex-direction: row;
  padding: 5px;
`;

// font-family: 'Rubik', sans-serif;
// font-family: 'Open Sans', sans-serif;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 100px;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: row;
  padding: 5px;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  padding: 5px 5px 0 5px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  justify-content: center;
  align-items: center;
  width: 50px;
`;

const IconTextContainer = styled.div`
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  justify-content: center;
  align-items: center;
`;

const SocialMediaIconContainer = styled(IconContainer)`
  width: 75px;
  align-items: flex-end;
`;

const SocialMedia = () => (
  <SocialMediaContainer>
    <SocialMediaIconContainer>
      <FontAwesomeIcon icon={faLinkedin} size="4x" />
    </SocialMediaIconContainer>
    <SocialMediaIconContainer>
      <FontAwesomeIcon icon={faFacebookSquare} size="4x" />
    </SocialMediaIconContainer>
  </SocialMediaContainer>
);

const ContactDetails = ({ icon, text }) => (
  <Text>
    <IconContainer>
      <FontAwesomeIcon icon={icon} size="lg" />
    </IconContainer>
    <IconTextContainer>{text}</IconTextContainer>
  </Text>
);

const HomePage = () => (
  <FlexRow>
    <FlexColumn>
      <div>
        <img style={{ width: "100%" }} src={avatar} alt="" />
      </div>
    </FlexColumn>
    <FlexColumn>
      <Name>{profile.name}</Name>
      <WorkTitle>
        <IconContainer>
          <FontAwesomeIcon icon={faCode} />
        </IconContainer>
        <IconTextContainer>{profile.WorkTitle}</IconTextContainer>
      </WorkTitle>
      <ContactDetails text={profile.Email} icon={faAt} />
      <ContactDetails text={profile.Phonenbr} icon={faPhoneAlt} />
      <ContactDetails text={profile.Address} icon={faMapMarkerAlt} />
      <SocialMedia />
    </FlexColumn>
  </FlexRow>
);

export default HomePage;
