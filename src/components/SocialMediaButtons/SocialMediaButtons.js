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

  a {
    color: black;
  }

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
  padding: 10px 5px;
  width: 42px;
  min-height: 50px;
`;

const SmallIcon = styled(SocialMediaIconContainer)`
  padding: 0 3px;
  width: auto;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
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

const icons = {
  linkedin: faLinkedin,
  facebook: faFacebookSquare,
  github: faGithubSquare
};

const SocialMediaButtons = ({ size = "3x", links = {} }) => {
  const Icon = getIconSize(size);
  return (
    <SocialMediaContainer>
      {Object.keys(links).map((type, index) => (
        <Icon key={index}>
          <a href={links[type]} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icons[type]} size={size} />
          </a>
        </Icon>
      ))}
    </SocialMediaContainer>
  );
};

export default SocialMediaButtons;
