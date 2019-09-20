import React from "react";
import { FlexColumns } from "../FlexComponents";
import SettingsConsumer from "../../contexts/SettingsContext";
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
  font-size: 50px;
  border: 2px solid #405c27;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-weight: bold;
`;

export default () => (
  <FlexColumns>
    <SettingsConsumer>
      {({ widthClass }) => (
        <React.Fragment>
          {widthClass > 1 && <Icon>H</Icon>}
          {getNav(widthClass)}
        </React.Fragment>
      )}
    </SettingsConsumer>
  </FlexColumns>
);
