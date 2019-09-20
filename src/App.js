import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { SettingsProvider } from "./contexts/SettingsContext";
import { ContentProvider } from "./contexts/ContentContext";

import Footer from "./containers/Footer";
import Header from "./containers/Header";
import { Main } from "./components/Main";

import "./App.css";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  min-height: 100vh;
  header {
    width: 100%;
  }
`;

const App = () => (
  <AppContainer>
    <Router>
      <SettingsProvider>
        <ContentProvider>
          <Header />
          <Main />
          <Footer />
        </ContentProvider>
      </SettingsProvider>
    </Router>
  </AppContainer>
);

export default App;
