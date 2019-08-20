import styled, { css } from "styled-components";

const sharedStyle = css`
  font-family: "Rubik", sans-serif;
  font-weight: 100;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
`;

const Title = styled.h1`
  ${sharedStyle}
  font-size: 3em;
  line-height: 50px;
  padding: 0 0 10px 0;
  text-transform: uppercase;
  font-weight: bold;
  color: #405c27;
  @media (max-width: 480px) {
    font-size: 3em;
    line-height: 45px;
  }
  @media (min-width: 480px) {
    font-size: 3.75em;
    line-height: 55px;
  }
  @media (min-width: 768px) {
    text-align: left;
    justify-content: flex-start;
  }
`;

const MainTitle = styled(Title)`
  width: 100%;
  margin: 0;
  padding: 0;
  align-self: flex-start;
  text-align: center;
  @media (min-width: 768px) {
    padding-bottom: 10px;
  }
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  text-align: justify;
  font-size: 1em;
`;

export { MainTitle, Title, Text };
