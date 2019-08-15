import React from "react";
import { FlexRows } from "./../FlexComponents";
import SettingsConsumer from "./../../contexts/SettingsContext";
import HiddenNavigation from "./HiddenNavigation";
import Navigation from "./Navigation";
import "./style.css";

const Header = () => (
  <FlexRows>
    <SettingsConsumer>
      {settings =>
        settings.widthClass < 2 ? <HiddenNavigation /> : <Navigation />
      }
    </SettingsConsumer>
  </FlexRows>
);

export default Header;
