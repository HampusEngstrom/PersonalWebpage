import React from "react";
import "./TopNavigation.css";

export default props => {
  return <React.Fragment>{props.children || props.render()}</React.Fragment>;
};
