import React from "react";
import styled from "styled-components";

const Image = ({ src }) => (
  <div style={{ width: "100%" }}>
    <img style={{ width: "100%" }} src={src} />
  </div>
);

export { Image };
