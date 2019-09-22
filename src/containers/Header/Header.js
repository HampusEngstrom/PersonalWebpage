import React from "react";
import styled from "styled-components";

import Nav from "./../../components/Nav";

const HeaderContainer = styled.header``;

const Header = () => (
  <HeaderContainer role="banner">
    <Nav />
  </HeaderContainer>
);

export default Header;
