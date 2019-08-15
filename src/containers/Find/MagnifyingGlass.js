import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  flex: 0 0 auto;
  cursor: pointer;
`;

const MagnifyingGlass = () => (
  <IconContainer className="search-icon">
    <FontAwesomeIcon icon={faSearch} size="lg" />
  </IconContainer>
);

export default MagnifyingGlass;
