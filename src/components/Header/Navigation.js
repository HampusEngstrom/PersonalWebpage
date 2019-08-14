import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 100px;
  min-width: 720px;
  justify-content: center;
`;

const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  align-items: center;
  list-style: none;
  left 0;
  top: 0;
  display: flex;
  height: 100%;
  width: 600px;
  justify-content: space-around;
  flex-direction: row;
`;

export default () => (
  <NavigationContainer className="navigation-container">
    <NavigationList>
      <li>
        <NavLink to="/" exact className={"link"} activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-me" className={"link"} activeClassName="active">
          About me
        </NavLink>
      </li>
      <li>
        <NavLink to="/experiences" className={"link"} activeClassName="active">
          Experiences
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/knowledge-bank"
          className={"link"}
          activeClassName="active"
        >
          Knowledge bank
        </NavLink>
      </li>
      <li>
        <NavLink to="/fun-facts" className={"link"} activeClassName="active">
          Fun facts
        </NavLink>
      </li>
    </NavigationList>
  </NavigationContainer>
);
