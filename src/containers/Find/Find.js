import React from "react";
import styled from "styled-components";

import SearchContainer from "./SearchContainer";
import Backdrop from "./Backdrop";
import MagnifyingGlass from "./MagnifyingGlass";
import Close from "./Close";
import { Input } from "./../../components/Input";

const ResultList = styled.ul`
  margin: 0;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  z-index: 4;
  position: absolute;
  width: 90%;
  top: calc(100% + 10px);
`;

const FindContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 20px;
  @media (min-width: 480px) {
    margin-top: 0;
  }
`;

export default class Find extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data, result: [], active: false, value: "" };
  }

  handleChange = value => {
    const v = value.toLowerCase();
    const { data } = this.state;
    this.setState(state => ({ ...state, value }));

    const result = data.filter(({ title }) => title.toLowerCase().includes(v));

    if (v.length > 0) {
      this.setState(state => ({ ...state, result, active: true }));
    } else {
      this.setState(state => ({ ...state, result: [], active: false }));
    }
  };

  setActivity = active => () => {
    this.setState(state => ({
      ...state,
      active,
      result: [],
      value: ""
    }));
  };

  render() {
    const { result, active, value } = this.state;
    const activeClass = `${active ? "active" : ""}`;

    return (
      <FindContainer className={activeClass}>
        <Backdrop active={active} closeFn={this.setActivity(false)} />
        <SearchContainer className={activeClass}>
          <MagnifyingGlass />
          <Input value={value} onChangeHandler={this.handleChange} />
          <Close active={active} closeFn={this.setActivity(false)} />
        </SearchContainer>
        <ResultList>{this.props.render(result)}</ResultList>
      </FindContainer>
    );
  }
}
