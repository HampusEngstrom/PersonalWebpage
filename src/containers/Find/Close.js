import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  flex: 0 0 auto;
  cursor: pointer;

  opacity: 0;
  transform: scale(0.75);
  background-color: rgba(255, 255, 255, 0);
  z-index: -1;
  width: 0;
  &.active {
    width: 15vw;
    @media (min-width: 480px) {
      width: 50px;
    }
    opacity: 1;
  }
`;

const Close = ({ active, closeFn }) => (
  <IconContainer
    onClick={closeFn}
    className={`close-icon ${active ? "active" : ""}`}
  >
    <FontAwesomeIcon icon={faTimes} size="2x" />
  </IconContainer>
);

export default Close;
