import React from "react";
import { NavLink } from "react-router-dom";
import { SocialMediaButtons } from "./../SocialMediaButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faBrain,
  faCodeBranch as faBranch,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import {
  faGrinAlt as faGrin,
  faChartBar as faChart
} from "@fortawesome/free-regular-svg-icons";
import { Header3, Header4 } from "./../Elements";

import styled from "styled-components";

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const NavigationList = styled.div`
  margin: 0;
  padding: 0;
  width: 80%;
  align-items: center;
  flex-direction: column;
  list-style: none;
  left 0;
  transform: translateX(-105%);
  display: flex;
  position: fixed;
  top: 50px;
  background-color: #fcfcfc;
  height: 100%;
  box-shadow: 3px 0 5px -1px rgba(0,0,0,0.15);
  z-index: 20;
  transition: 0.25s transform;

  &.active {
      transform: translateX(0%);
  }
`;

const MenuItems = styled.ul`
  width: 100%;
  padding: 20px 0;
  margin: 0;
  box-shadow: 0 3px 4px -2px rgba(0, 0, 0, 0.1);
  li.menu-link {
    display: flex;
    width: 100%;
    height: 60px;
    font-size: 1em;
    align-items: center;
    justify-content: center;
    a {
      width: 80%;
      display: flex;
      height: 100%;
      align-items: center;
      svg {
        margin-right: 5%;
      }
    }
  }
`;

const ToggleNavigation = styled.div`
  display: flex;
  color: white;
  height: 100%;
`;

const MenuBtn = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const MenuTitle = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 4px -2px rgba(0, 0, 0, 0.1);
  svg {
    color: #1a1a1a;
  }
`;

const NavigationHeader = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  font-size: 1em;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 4px -2px rgba(0, 0, 0, 0.1);
`;

const Icon = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #405c27;
`;

const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 19;
  display: none;
  &.active {
    display: block;
  }
`;

const Menu = styled.div`
  display: flex;
  z-index: 21;
  background-color: #1a1a1a;
  height: 50px;
  width: 100%;
  align-items: center;
`;

const MenuItem = ({ fn, to, icon, size = "lg", children }) => (
  <li className="menu-link">
    <NavLink
      to={to}
      exact
      className={"link"}
      activeClassName="active"
      onClick={fn}
    >
      <Icon>
        <FontAwesomeIcon icon={icon} size={size} />
      </Icon>
      {children}
    </NavLink>
  </li>
);

export default class HiddenNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  toggleActive = () => () => {
    this.setState(state => ({ ...state, active: !state.active }));
  };

  render() {
    const fn = this.toggleActive();
    return (
      <NavigationContainer className="navigation-container">
        <Background
          className={this.state.active && "active"}
          onClick={this.toggleActive()}
        />
        <Menu>
          <ToggleNavigation className="toggle-menu">
            <MenuBtn onClick={this.toggleActive()}>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </MenuBtn>
          </ToggleNavigation>
          <div style={{ color: "white", display: "flex" }}>
            Förnamn Efternamn
          </div>
        </Menu>
        <NavigationList className={this.state.active && "active"}>
          <MenuTitle>
            <Icon>
              <FontAwesomeIcon icon={faUserCircle} size="6x" />
            </Icon>
            <Header3>Logo</Header3>
          </MenuTitle>
          <NavigationHeader>
            <Header4>Navigation</Header4>
          </NavigationHeader>
          <MenuItems>
            <MenuItem icon={faHome} to="/" fn={fn}>
              Home
            </MenuItem>
            <MenuItem icon={faGrin} to="/about-me" fn={fn}>
              About me
            </MenuItem>
            <MenuItem icon={faBranch} to="/experiences" fn={fn}>
              Experiences
            </MenuItem>
            <MenuItem icon={faBrain} to="/knowledge-bank" fn={fn}>
              Knowledge
            </MenuItem>
            <MenuItem icon={faChart} to="/fun-facts" fn={fn}>
              Fun facts
            </MenuItem>
          </MenuItems>
          <SocialMediaButtons />
        </NavigationList>
      </NavigationContainer>
    );
  }
}
