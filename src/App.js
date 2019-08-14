import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import ReactResizeDetector from "react-resize-detector";
import { Scrollbar } from "./components/Scrollbar";

import { Header } from "./components/Header";
import { Main } from "./components/Main";

import "./App.css";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
`;

function getWidthClass(width) {
  if (width < 480) {
    return 0;
  } else if (width < 768) {
    return 1;
  } else if (width < 1024) {
    return 2;
  } else if (width >= 1024) {
    return 3;
  }
}

const App = () => (
  <AppContainer>
    <Router>
      <Scrollbar>
        <ReactResizeDetector querySelector="#root" handleWidth>
          {({ width }) => (
            <React.Fragment>
              <Header width={getWidthClass(width)} />
              <Main width={getWidthClass(width)} />
            </React.Fragment>
          )}
        </ReactResizeDetector>
      </Scrollbar>
    </Router>
  </AppContainer>
);

export default App;
