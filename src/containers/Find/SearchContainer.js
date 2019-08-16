import styled, { keyframes } from "styled-components";

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

export default styled.div`
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
    opacity: 0;
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
