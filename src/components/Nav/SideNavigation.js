import React from "react";
import { SocialMediaButtons } from "../SocialMediaButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Header3, Header4 } from "../Elements";

import styled from "styled-components";

import "./SideNavigation.css";

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

const ToggleNavigation = styled.div`
  display: flex;
  color: white;
  height: 100%;
`;

const ToggleNavigationBtn = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const NavigationTitle = styled.div`
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

const NavigationControl = styled.div`
  display: flex;
  z-index: 21;
  background-color: #1a1a1a;
  height: 50px;
  width: 100%;
  align-items: center;
`;

export default class SideNavigation extends React.Component {
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
    return (
      <NavigationContainer className="navigation-container">
        <Background
          className={this.state.active && "active"}
          onClick={this.toggleActive()}
        />
        <NavigationControl>
          <ToggleNavigation className="toggle-menu">
            <ToggleNavigationBtn onClick={this.toggleActive()}>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </ToggleNavigationBtn>
          </ToggleNavigation>
          <div style={{ color: "white", display: "flex" }}>
            Förnamn Efternamn
          </div>
        </NavigationControl>
        <NavigationList className={this.state.active && "active"}>
          <NavigationTitle>
            <Icon>
              <FontAwesomeIcon icon={faUserCircle} size="6x" />
            </Icon>
            <Header3>Logo</Header3>
          </NavigationTitle>
          <NavigationHeader>
            <Header4>Navigation</Header4>
          </NavigationHeader>
          {this.props.children || this.props.render(this.toggleActive())}
          <SocialMediaButtons />
        </NavigationList>
      </NavigationContainer>
    );
  }
}
