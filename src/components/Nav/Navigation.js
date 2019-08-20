import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBrain,
  faCodeBranch as faBranch
} from "@fortawesome/free-solid-svg-icons";
import { faGrinAlt, faChartBar } from "@fortawesome/free-regular-svg-icons";

const IconContainer = styled.div`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  width: 20%;
  justify-content: center;
  align-items: center;
  color: #405c27;
`;

const Icon = ({ icon, visible }) => (
  <IconContainer visible={visible}>
    <FontAwesomeIcon icon={icon} size="lg" />
  </IconContainer>
);

export default ({ clickHandler, visibleIcons = true, ...props }) => {
  const classes = { className: "link", activeClassName: "active" };
  return (
    <nav {...props}>
      <NavLink to="/" exact onClick={clickHandler} {...classes}>
        <Icon visible={visibleIcons} icon={faHome} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/about-me" onClick={clickHandler} {...classes}>
        <Icon visible={visibleIcons} icon={faGrinAlt} />
        <span>About me</span>
      </NavLink>
      <NavLink to="/experiences" onClick={clickHandler} {...classes}>
        <Icon visible={visibleIcons} icon={faBranch} />
        <span>Experiences</span>
      </NavLink>
      <NavLink to="/knowledge-bank" onClick={clickHandler} {...classes}>
        <Icon visible={visibleIcons} icon={faBrain} />
        <span>Knowledge bank</span>
      </NavLink>
      <NavLink to="/fun-facts" onClick={clickHandler} {...classes}>
        <Icon visible={visibleIcons} icon={faChartBar} />
        <span>Fun facts</span>
      </NavLink>
    </nav>
  );
};
