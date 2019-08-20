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
  align-items: flex-end;
  cursor: pointer;
  > svg {
    cursor: pointer;
    color: black;
    transition: 0.2s color;
    :hover {
      color: #191919;
    }
  }
`;

const LargeIcon = styled(SocialMediaIconContainer)`
  padding: 0 5px;
  width: 42px;
`;

const SmallIcon = styled(SocialMediaIconContainer)`
  padding: 0 3px;
  width: auto;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px 15px 15px 15px;
  justify-content: center;
  flex-grow: 1;
  @media (min-width: 768px) {
    justify-content: flex-start;
    padding: 15px 15px 0 15px;
  }
`;

const getIconSize = size => {
  switch (size) {
    case "2x":
      return SmallIcon;

    case "3x":
    default:
      return LargeIcon;
  }
};

const SocialMediaButtons = ({ size = "3x" }) => {
  const Icon = getIconSize(size);
  return (
    <SocialMediaContainer>
      <Icon>
        <FontAwesomeIcon icon={faLinkedin} size={size} />
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={faFacebookSquare} size={size} />
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={faGithubSquare} size={size} />
      </Icon>
    </SocialMediaContainer>
  );
};

export default SocialMediaButtons;
