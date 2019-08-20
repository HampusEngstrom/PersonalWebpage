import React from "react";
import { FlexRows } from "../FlexComponents";
import SettingsConsumer from "../../contexts/SettingsContext";

import Navigation from "./Navigation";
import SideNavigation from "./SideNavigation";
import TopNavigation from "./TopNavigation";

export default () => (
  <FlexRows>
    <SettingsConsumer>
      {({ widthClass }) =>
        widthClass < 2 ? (
          <SideNavigation
            render={handleClick => (
              <Navigation clickHandler={handleClick} className="side-nav" />
            )}
          />
        ) : (
          <TopNavigation render={() => <Navigation className="top-nav" />} />
        )
      }
    </SettingsConsumer>
  </FlexRows>
);
