import React from "react";
import { Route, Switch } from "react-router-dom";
import ExperiencePage from "./../../pages/ExperiencePage";
import KnowledgeBankPage from "./../../pages/KnowledgeBankPage";
import HomePage from "./../../pages/HomePage";
import AboutMePage from "./../../pages/AboutMePage";
import PrintVersionPage from "./../../pages/PrintVersionPage";

import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  height: 100%;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

const Main = ({ width }) => (
  <MainContainer>
    <Switch>
      <Route
        path="/"
        exact
        render={props => <HomePage {...props} width={width} />}
      />

      <Route
        path="/about-me"
        render={props => <AboutMePage {...props} width={width} />}
      />
      <Route
        path="/experiences"
        render={props => <ExperiencePage {...props} width={width} />}
      />
      <Route
        path="/knowledge-bank"
        render={props => <KnowledgeBankPage {...props} width={width} />}
      />
      <Route
        path="/print"
        render={props => <PrintVersionPage {...props} width={width} />}
      />
      <Route component={HomePage} />
    </Switch>
  </MainContainer>
);

export default Main;
