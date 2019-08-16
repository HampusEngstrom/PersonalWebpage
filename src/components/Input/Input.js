import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 24px;
  outline: none;
  background-color: rgba(255, 255, 255, 0);
  height: 50px;
`;

export default ({ value, onChangeHandler }) => (
  <Input
    value={value}
    onChange={e => {
      onChangeHandler(e.target.value);
    }}
  />
);
