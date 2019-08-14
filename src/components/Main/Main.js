import React from "react";
import { Route, Switch } from "react-router-dom";
import ExperiencePage from "./../../pages/ExperiencePage";
import KnowledgeBankPage from "./../../pages/KnowledgeBankPage";
import HomePage from "./../../pages/HomePage";
import AboutMePage from "./../../pages/AboutMePage";
import FunFactsPage from "./../../pages/FunFactsPage";

import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 10px 0;
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
        path="/fun-facts"
        render={props => <FunFactsPage {...props} width={width} />}
      />
      <Route component={HomePage} />
    </Switch>
  </MainContainer>
);

export default Main;