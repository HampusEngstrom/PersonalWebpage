import styled from "styled-components";

const Title = styled.h1`
  font-family: "Rubik", sans-serif;
  font-weight: 100;
  display: flex;
  flex-direction: row;
  padding: 5px;
  font-size: 3em;
  line-height: 50px;
  padding: 0 0 10px 0;
  margin: 0;
  text-transform: uppercase;
  font-weight: bold;
  color: #405c27;
  @media (max-width: 480px) {
    font-size: 3em;
    line-height: 45px;
  }
  @media (min-width: 480px) {
    font-size: 4.3em;
    line-height: 65px;
  }
  @media (min-width: 768px) {
    text-align: left;
    justify-content: flex-start;
  }
`;

const Header1 = styled.h1`
  font-family: "Rubik", sans-serif;
  font-weight: 100;
  display: flex;
  flex-direction: row;
  padding: 5px;
  font-size: 2.75em;
  line-height: 60px;
  padding: 0 0 10px 0;
  margin: 0;
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
  font-family: "Rubik", sans-serif;
  font-weight: 100;
  display: flex;
  flex-direction: row;
  padding: 5px;
  font-size: 2.5em;
  padding: 0;
  margin: 0;
`;

const Header3 = styled.h3`
  font-family: "Rubik", sans-serif;
  font-weight: 100;
  display: flex;
  flex-direction: row;
  font-size: 1.5em;
  padding: 0;
  margin: 0;
`;

const Header4 = styled.h4`
  font-family: "Rubik", sans-serif;
  font-weight: 100;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  font-size: 1.2em;
`;

const Header5 = styled.h5`
  font-family: "Rubik", sans-serif;
  font-weight: 100;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  font-size: 1.1em;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  text-align: justify;

  font-size: 1em;
`;

export { Title, Header1, Header2, Header3, Header4, Header5, Text };
