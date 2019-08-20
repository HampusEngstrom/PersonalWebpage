import React from "react";
import styled from "styled-components";
import Navigation from "./../../components/Nav/Navigation";
import { FlexRows, FlexColumns } from "./../../components/FlexComponents";

import ContentConsumer from "./../../contexts/ContentContext";
import { SocialMediaButtons } from "./../../components/SocialMediaButtons";
import ContactDetails from "./../../features/ContactDetails";

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

const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 25px;
  box-sizing: border-box;
  width: 100%;
  justify-content: center;

  nav {
    display: flex;
    flex-direction: column;
    a {
      color: black;
      margin: 2px 0;
      text-decoration: none;
      font-size: 0.9em;
    }
  }
`;

export default () => (
  <ContentConsumer>
    {({ profile }) => (
      <footer role="contentinfo">
        <FlexColumns style={{ width: "100%" }}>
          <Line />
          <FlexRows>
            <NavigationContainer>
              <Navigation visibleIcons={false} />
            </NavigationContainer>
            <Container>
              <div>
                <span style={{ color: "black" }}>SV</span>|<span>EN</span>
              </div>
              <SocialMediaButtons size="2x" />
              <ContactDetails
                align="center"
                visibleIcons={false}
                email={profile.contact.email}
              />
              <div>© Hampus Engström 2019</div>
            </Container>
          </FlexRows>
        </FlexColumns>
      </footer>
    )}
  </ContentConsumer>
);
