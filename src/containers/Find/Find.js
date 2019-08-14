import React from "react";
import styled, { keyframes } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const pulse = keyframes`
0% {
    transform: scale(1);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
    background-color: rgba(255,255,255,0.10);
    border: 2px solid rgba(255,255,255,0.15);
  }
  50% {
    transform: scale(0.9);
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.25);
    background-color: rgba(255,255,255,0.1);
    border: 2px solid rgba(255,255,255,0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0px 0px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: rgba(255,255,255,0.10);
    border: 2px solid rgba(255,255,255,0.15);
  }
`;

const Input = ({ value, onChangeHandler }) => (
  <input
    value={value}
    onChange={e => {
      onChangeHandler(e.target.value);
    }}
  />
);

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

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.75);
  display: none;
`;

const FindContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 20px;
  &.active ${Backdrop} {
    display: block;
  }
  @media (min-width: 480px) {
    margin-top: 0;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 30px;
  transition: all 0.5s;
  height: auto;
  width: auto;
  animation: ${pulse} 1.5s infinite ease-in-out;
  border: 2px solid rgba(255, 255, 255, 0);
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  outline: none;
  z-index: 4;

  input {
    font-size: 24px;
    outline: none;
    background-color: rgba(255, 255, 255, 0);
    opacity: 0;
    height: 50px;
    width: 0;
    transition: width 0.25s, opacity 0.5s;
    border: 0;
  }

  &:focus-within,
  &:hover,
  &.active {
    animation: none;
    border-radius: 25px;
  }

  &:focus-within,
  &:hover,
  &.active {
    input {
      width: 70vw;
      @media (min-width: 480px) {
        width: 350px;
      }
      opacity: 1;
      margin-left: 25px;
    }
    .search-icon {
      opacity: 0;
      width: 0;
      transform: scale(0.75);
      background-color: rgba(255, 255, 255, 0);
      z-index: -1;
    }
    .close-icon {
      width: 15vw;

      @media (min-width: 480px) {
        width: 50px;
      }
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  flex: 0 0 auto;
  cursor: pointer;

  &.close-icon {
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
    console.log("setActivity", active);
  };

  render() {
    const { result, active, value } = this.state;

    return (
      <FindContainer className={`find-container ${active ? "active" : ""}`}>
        <Backdrop className="backdrop" onClick={this.setActivity(false)} />
        <SearchContainer
          className={`search-container ${active ? "active" : ""}`}
        >
          <IconContainer className="search-icon">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </IconContainer>
          <Input value={value} onChangeHandler={this.handleChange} />
          <IconContainer
            onClick={this.setActivity(false)}
            className={`close-icon ${active ? "active" : ""}`}
          >
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </IconContainer>
        </SearchContainer>
        <ResultList>{this.props.render(result)}</ResultList>
      </FindContainer>
    );
  }
}
