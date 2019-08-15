import styled, { css } from "styled-components";

const sharedStyle = css`
  font-family: "Rubik", sans-serif;
  font-weight: 100;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
`;

const Header1 = styled.h1`
  ${sharedStyle}
  font-size: 2.75em;
  line-height: 60px;
  padding: 0 0 10px 0;
  text-transform: uppercase;
  font-weight: bold;
  color: #405c27;
  @media (max-width: 480px) {
    font-size: 2em;
  }
  @media (min-width: 768px) {
    text-align: left;
    justify-content: flex-start;
  }
`;

const Header2 = styled.h2`
  ${sharedStyle}
  font-size: 2.5em;
`;

const Header3 = styled.h3`
  ${sharedStyle}
  font-size: 1.5em;
`;

const Header4 = styled.h4`
  ${sharedStyle}
  font-size: 1.2em;
`;

const Header5 = styled.h5`
  ${sharedStyle}
  font-size: 1.1em;
`;

export { Header1, Header2, Header3, Header4, Header5 };
