import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconContainer } from "./../IconsComponent";
import {
  faLinkedin,
  faFacebookSquare,
  faGithubSquare
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaIconContainer = styled(IconContainer)`
  width: 42px;
  align-items: flex-end;
  cursor: pointer;
  padding: 0 5px;
  > svg {
    cursor: pointer;
    color: black;
    transition: 0.2s color;
    :hover {
      color: #191919;
    }
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5vh 1vh 1vh 1vh;
  width: 100%;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
    padding: 1vh 1vh 0 1vh;
  }
`;

const SocialMediaButtons = () => (
  <SocialMediaContainer>
    <SocialMediaIconContainer>
      <FontAwesomeIcon icon={faLinkedin} size="3x" />
    </SocialMediaIconContainer>
    <SocialMediaIconContainer>
      <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
    </SocialMediaIconContainer>
    <SocialMediaIconContainer>
      <FontAwesomeIcon icon={faGithubSquare} size="3x" />
    </SocialMediaIconContainer>
  </SocialMediaContainer>
);

export default SocialMediaButtons;
