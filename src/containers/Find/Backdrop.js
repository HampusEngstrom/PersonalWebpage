import React from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.75);
  display: none;
  &.active {
    display: block;
  }
`;

export default ({ active, closeFn }) => (
  <Backdrop className={`${active ? "active" : ""}`} onClick={closeFn} />
);
