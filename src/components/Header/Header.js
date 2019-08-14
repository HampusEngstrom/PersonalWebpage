import React from "react";
import { FlexRows } from "./../FlexComponents";
import HiddenNavigation from "./HiddenNavigation";
import Navigation from "./Navigation";
import "./style.css";

const Header = props => (
  <FlexRows>{props.width < 2 ? <HiddenNavigation /> : <Navigation />}</FlexRows>
);

export default Header;
