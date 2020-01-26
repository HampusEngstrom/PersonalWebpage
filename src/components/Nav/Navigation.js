import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome as homeIcon,
  faBrain as knowledgeIcon,
  faCodeBranch as experiencesIcon,
  faUserTie as aboutMeIcon
} from "@fortawesome/free-solid-svg-icons";

const IconContainer = styled.div`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  color: #405c27;
  min-width: 50px;
`;

const Label = styled.div`
  display: ${({ visible }) => !visible && "none"};
  text-align: center;
`;

const Icon = ({ icon, visible }) => (
  <IconContainer visible={visible}>
    <FontAwesomeIcon icon={icon} size="lg" />
  </IconContainer>
);

export default ({ clickHandler, labels = true, icons = true, ...props }) => {
  const classes = { className: "link", activeClassName: "active" };
  return (
    <nav {...props}>
      <NavLink to="/" exact onClick={clickHandler} {...classes}>
        <Icon visible={icons} icon={homeIcon} />
        <Label visible={labels}>Hem</Label>
      </NavLink>
      <NavLink to="/about-me" onClick={clickHandler} {...classes}>
        <Icon visible={icons} icon={aboutMeIcon} />
        <Label visible={labels}>Vem är jag?</Label>
      </NavLink>
      <NavLink to="/experiences" onClick={clickHandler} {...classes}>
        <Icon visible={icons} icon={experiencesIcon} />
        <Label visible={labels}>Mina erfarenheter</Label>
      </NavLink>
      <NavLink to="/knowledge-bank" onClick={clickHandler} {...classes}>
        <Icon visible={icons} icon={knowledgeIcon} />
        <Label visible={labels}>Vad kan jag?</Label>
      </NavLink>
      {/* <NavLink to="/print" target="_blank" onClick={clickHandler} {...classes}>
        <Icon visible={icons} icon={printIcon} />
        <Label visible={labels}>Utskrift</Label>
      </NavLink> */}
    </nav>
  );
};
