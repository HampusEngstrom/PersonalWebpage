import React from "react";
import { FlexColumns } from "../FlexComponents";
import SettingsConsumer from "../../contexts/SettingsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import Navigation from "./Navigation";
import SideNavigation from "./SideNavigation";
import TopNavigation from "./TopNavigation";

const getNav = widthClass => {
  switch (widthClass) {
    case 0:
    case 1:
      return (
        <SideNavigation
          render={handleClick => (
            <Navigation clickHandler={handleClick} className="side-nav" />
          )}
        />
      );
    default:
      return (
        <TopNavigation
          render={() => <Navigation className="top-nav" icons={false} />}
        />
      );
  }
};

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #405c27;
  margin-top: 20px;
`;

export default () => (
  <FlexColumns>
    <SettingsConsumer>
      {({ widthClass }) => (
        <React.Fragment>
          {widthClass > 1 && (
            <Icon>
              <FontAwesomeIcon icon={faUserCircle} size="3x" />
            </Icon>
          )}
          {getNav(widthClass)}
        </React.Fragment>
      )}
    </SettingsConsumer>
  </FlexColumns>
);
