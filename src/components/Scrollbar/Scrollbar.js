import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const Scrollbar = props => (
  <Scrollbars
    autoHide
    autoHideTimeout={1000}
    autoHideDuration={200}
    autoHeight
    autoHeightMin={"100vh"}
    autoHeightMax={"100vh"}
    thumbMinSize={30}
    universal={true}
    renderThumbVertical={({ style, ...props }) => (
      <div
        {...props}
        style={{
          ...style,
          backgroundColor: "#000",
          borderRadius: "20px",
          width: "4px",
          opacity: "0.5"
        }}
      />
    )}
  >
    {props.children}
  </Scrollbars>
);

export default Scrollbar;
