import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { Scrollbar } from "./components/Scrollbar";
import { SettingsProvider } from "./contexts/SettingsContext";
import { ContentProvider } from "./contexts/ContentContext";

import { Header } from "./components/Header";
import { Main } from "./components/Main";

import "./App.css";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
`;

const App = () => (
  <AppContainer>
    <Router>
      <Scrollbar>
        <SettingsProvider>
          <ContentProvider>
            <Header />
            <Main />
          </ContentProvider>
        </SettingsProvider>
      </Scrollbar>
    </Router>
  </AppContainer>
);

export default App;
