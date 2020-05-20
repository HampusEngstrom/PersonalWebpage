import React from "react";
import styled from "styled-components";
import { FlexRows, FlexColumns } from "./../../components/FlexComponents";

import ContentConsumer from "./../../contexts/ContentContext";

import "./Footer.css";

const Container = styled(FlexColumns)`
  padding: 25px;
  box-sizing: border-box;
  width: 100%;
`;

const Line = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 1px;
`;

const getCurrentYear = () => new Date().getFullYear();

export default () => (
  <ContentConsumer>
    {({ profile }) => (
      <footer role="contentinfo">
        <FlexColumns style={{ width: "100%" }}>
          <Line />
          <FlexRows>
            <Container>
              <div>© Hampus Engström {getCurrentYear()}</div>
            </Container>
          </FlexRows>
        </FlexColumns>
      </footer>
    )}
  </ContentConsumer>
);
