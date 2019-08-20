import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
// import { Scrollbar } from "./components/Scrollbar";
import { SettingsProvider } from "./contexts/SettingsContext";
import { ContentProvider } from "./contexts/ContentContext";
import Footer from "./containers/Footer";

import Nav from "./components/Nav";
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
      {/* <Scrollbar> */}
      <SettingsProvider>
        <ContentProvider>
          <header role="banner">
            <Nav />
          </header>
          <Main />
          <Footer />
        </ContentProvider>
      </SettingsProvider>
      {/* </Scrollbar> */}
    </Router>
  </AppContainer>
);

export default App;
