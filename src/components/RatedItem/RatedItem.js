import React from "react";
import { HeartRating } from "../Rating";
import { Text, Header4 } from "./../Elements";
import styled from "styled-components";

const DescriptiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0 20px 0;
  flex-shrink: 0;
  flex-grow: 0;
  align-items: center;

  @media (min-width: 480px) {
    align-items: flex-start;
    width: 200px;
    padding: 20px 20px 20px 10px;
  }
`;

const ItalicText = styled(Text)`
  font-style: italic;
  text-align: center;
  @media (min-width: 480px) {
    text-align: left;
  }
`;

const Header = styled(Header4)`
  justify-content: center;
`;

const SimpleContainer = styled.div`
  display: flex;
  padding: 20px 30px;
  flex-shrink: 0;
  flex-grow: 0;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 1px solid #e6e6e6;
  .description {
    display: none;
  }
`;

const getContainer = theme => {
  switch (theme) {
    case "DESCRIPTIVE":
      return ({ children }) => (
        <DescriptiveContainer>{children}</DescriptiveContainer>
      );
    case "SIMPLE_ONE_ROW":
      return ({ children }) => <SimpleContainer>{children}</SimpleContainer>;
    default:
      return ({ children }) => (
        <DescriptiveContainer>{children}</DescriptiveContainer>
      );
  }
};

const RatedItem = ({ theme, title, rating, description, screenWidth }) => {
  const Container = getContainer(theme);
  return (
    <Container>
      <Header className="header">{title}</Header>
      <HeartRating rating={rating} screenWidth={screenWidth} />
      {description && (
        <ItalicText className="description">{description}</ItalicText>
      )}
    </Container>
  );
};

export default RatedItem;
